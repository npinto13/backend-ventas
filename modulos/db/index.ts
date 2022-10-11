import * as constantes from '../utils/constantes';
import now from 'performance-now';
import moment from 'moment';
var pg = require('pg')
var colors = require('colors');

// The map used to store the query times, where the query unique
// identifier is the key.
export const times = Object.create({})
// Used for keeping track of the order queries are executed.
export let count = 0;

pg.types.setTypeParser(1114, (str: any) => str);

export const db = require('knex')({
  client: 'pg',
  connection: {
    host: constantes.DB.HOST,
    user: constantes.DB.USER,
    password: constantes.DB.PASSWORD,
    database: constantes.DB.DATABASE,
    timezone: 'UTC',
  },
  pool: {
    /*afterCreate: function (conn:any, done:any) {
        conn.query('select 1 as result', function (err:any, result:any) {
            conn.on('notice', function (msg:any) {
                // here we can get the pg procedure logs (raise notice/raise info)
                console.log('notice from postgres-> ' +  msg.message);
            });
            done(err, conn);
        });
    }*/
  }
});

export const printQueryWithTime = (uid: any) => {
  const { startTime, endTime, query } = times[uid];
  const elapsedTime = endTime - startTime;

  // I print the sql generated for a given query, as well as 
  // the bindings for the queries.
  console.log(`${moment().format("YYYY-MM-DD HH:mm:ss")} --> ${query.sql.green}`, ',', `[${query.bindings ? query.bindings.join(',') : ''}]`);
  console.log(`Time: ${elapsedTime.toFixed(3)} ms\n`);

  // After I print out the query, I have no more use to it, 
  // so I delete it from my map so it doesn't grow out of control.
  delete times[uid];
};

export const printIfPossible = (uid: any) => {
  const { position } = times[uid];

  // Look of a query with a position one less than the current query
  const previousTimeUid = Object.keys(times).find(key => times[key].position === position - 1);

  // If we didn't find it, it must have been printed already and we can safely print ourselves.
  if (!previousTimeUid) {
    printQueryWithTime(uid);
  }
};

export const printQueriesAfterGivenPosition = (position: any) => {
  // Look for the next query in the queue
  const nextTimeUid = Object.keys(times).find(key => times[key].position === position + 1);

  // If we find one and it is marked as finished, we can go ahead and print it
  if (nextTimeUid && times[nextTimeUid].finished) {
    const nextPosition = times[nextTimeUid].position;
    printQueryWithTime(nextTimeUid);

    // There might be more queries that need to printed, so we should keep looking...
    printQueriesAfterGivenPosition(nextPosition);
  }
};

db.on('query', (query: any) => {
  const uid = query.__knexQueryUid;
  times[uid] = {
    position: count,
    query,
    startTime: now(),
    finished: false,
  };
  count = count + 1;

}).on('query-response', (response: any, query: any) => {
  const uid = query.__knexQueryUid;
  times[uid].endTime = now();
  times[uid].finished = true;
  const position = times[uid].position;

  // Print the current query, if I'm able
  printIfPossible(uid);

  // Check to see if queries further down the queue can be executed,
  //in case they weren't able to be printed when they first responded.
  printQueriesAfterGivenPosition(position);
}), function (err: any) {
  console.log(`${moment().format("YYYY-MM-DD HH:mm:ss")} --> ${err.stack}`);
};

db.on('connection-error', () => console.log('Error de Conexion'))

export const conexionDB = (
  host: string = constantes.DB.HOST,
  port: number = constantes.DB.PORT || 5432,
  user: string = constantes.DB.USER,
  password: string = constantes.DB.PASSWORD,
  database: string = constantes.DB.DATABASE,
  timezone: string = 'UTC'
) => {
  const db = require('knex')({
    client: 'pg',
    connection: {
      host: host,
      port: port,
      user: user,
      password: password,
      database: database,
      timezone: timezone,
    },
    pool: {
      /*afterCreate: function (conn:any, done:any) {
          conn.query('select 1 as result', function (err:any, result:any) {
              conn.on('notice', function (msg:any) {
                  // here we can get the pg procedure logs (raise notice/raise info)
                  console.log('notice from postgres-> ' +  msg.message);
              });
              done(err, conn);
          });
      }*/
    }
  });
  db.on('query', (query: any) => {
    const uid = query.__knexQueryUid;
    times[uid] = {
      position: count,
      query,
      startTime: now(),
      finished: false,
    };
    count = count + 1;
  
  }).on('query-response', (response: any, query: any) => {
    const uid = query.__knexQueryUid;
    times[uid].endTime = now();
    times[uid].finished = true;
    const position = times[uid].position;
  
    // Print the current query, if I'm able
    printIfPossible(uid);
  
    // Check to see if queries further down the queue can be executed,
    //in case they weren't able to be printed when they first responded.
    printQueriesAfterGivenPosition(position);
  }), function (err: any) {
    console.log(`${moment().format("YYYY-MM-DD HH:mm:ss")} --> ${err.stack}`);
  };
  
  db.on('connection-error', () => console.log('Error de Conexion'))

  return db;
}


