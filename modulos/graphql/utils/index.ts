import { GraphQLModule } from '@graphql-modules/core';
import { loadFilesSync } from '@graphql-tools/load-files';
import * as utils from '../../utils/'
import { UtilsResolvers } from './resolvers/utils';


export const UtilsModule = new GraphQLModule({
    name: "Utils",
    resolvers: [
        UtilsResolvers,
    ],
    typeDefs: loadFilesSync(__dirname + '/schema/'),
    context: ({ req }) => utils.getInfoRequest(req)
});