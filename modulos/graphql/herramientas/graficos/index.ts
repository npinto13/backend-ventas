import { GraphQLModule } from '@graphql-modules/core';
import { loadFilesSync } from '@graphql-tools/load-files';
import * as utils from '../../../utils'
import { HistoricosResolvers } from './resolvers/historicos';
import {UtilsModule} from "../../utils";


export const GraficosModule = new GraphQLModule({
    name: "Graficos",
    resolvers: [
        HistoricosResolvers,
    ],
    imports: [UtilsModule],
    typeDefs: loadFilesSync(__dirname + '/schema/'),
    context: ({ req }) => utils.getInfoRequest(req)
});