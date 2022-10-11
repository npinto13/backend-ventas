import { GraphQLModule } from '@graphql-modules/core';
import { loadFilesSync } from '@graphql-tools/load-files';
import * as utils from '../../../utils'
import { UtilsModule } from "../../utils";
import { PaisesResolvers } from './resolvers/paises';


export const GeneralModule = new GraphQLModule({
    name: "General",
    resolvers: [
        PaisesResolvers
    ],
    imports: [UtilsModule],
    typeDefs: loadFilesSync(__dirname + '/schema/'),
    context: ({ req }) => utils.getInfoRequest(req)
});