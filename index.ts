import express from 'express';

import { GraphQLModule } from '@graphql-modules/core';
import { ApolloServer } from 'apollo-server-express';
import { AppModule } from './modulos/graphql/';
import fs from 'fs';
import https from 'https';
import http from 'http';

async function startApolloServer() {
  const configurations: { [key: string]: any } = {
    // Note: You may need sudo to run on port 443
    //production: { ssl: true, port: 443, hostname: '186.64.123.2' },
    production: { ssl: false, port: 4013, hostname: '186.64.123.2' },
    development: { ssl: false, port: 4013, hostname: 'localhost' },
  };

  const environment = process.env.NODE_ENV || 'production';
  const config = configurations[environment];

  const { schema, context } = new GraphQLModule({
    imports: [
      AppModule,
    ],
  });

  const server = new ApolloServer({
    schema,
    context,
    csrfPrevention: true,
  });
  await server.start();

  var cors = require('cors');

  const app = express();

  var allowedOrigins = [
    'http://localhost:3011',
    'https://186.64.123.2',
    'http://186.64.123.2',
    'https://studio.apollographql.com'
  ];

  app.use(cors({
    origin: function (origin: any, callback: any) {    // allow requests with no origin 
      // (like mobile apps or curl requests)
      //console.log('origin:',origin)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg = 'The CORS policy for this site does not ' +
          'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      } return callback(null, true);
    }
  }));

  const corsOptions = {

    origin: ['https://186.64.123.2', 'http://186.64.123.2', 'http://localhost:3011', 'https://studio.apollographql.com']

  };

  server.applyMiddleware({ app });

  // Create the HTTPS or HTTP server, per configuration
  let httpServer: http.Server | https.Server;
  if (config.ssl) {
    // Assumes certificates are in a .ssl folder off of the package root.
    // Make sure these files are secured.
    httpServer = https.createServer(
      {
        key: fs.readFileSync(`/opt/lego/certificates/miteletrabajo.cl.key`),
        cert: fs.readFileSync(`/opt/lego/certificates/miteletrabajo.cl.crt`)
      },

      app,
    );
  } else {
    httpServer = http.createServer(app);
  }

  await new Promise<void>(resolve =>
    httpServer.listen({ port: config.port }, resolve)
  );

  console.log(
    '🚀 Server ready at',
    `http${config.ssl ? 's' : ''}://${config.hostname}:${config.port}${server.graphqlPath
    }`
  );

  return { server, app };
}

startApolloServer()