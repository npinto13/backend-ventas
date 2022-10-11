import { GraphQLModule } from '@graphql-modules/core';
import { loadFilesSync } from '@graphql-tools/load-files';
import * as utils from '../../../utils'
import { ConsumosResolvers } from './resolvers/consumos';
import { LecturasServicioResolvers } from './resolvers/lecturasServicio';
import { LecturasVariableResolvers } from './resolvers/lecturasVariable';
import {UtilsModule} from "../../utils";


export const ReportesModule = new GraphQLModule({
    name: "Reportes",
    resolvers: [
        ConsumosResolvers,
        LecturasServicioResolvers,
        LecturasVariableResolvers
    ],
    imports: [UtilsModule],
    typeDefs: loadFilesSync(__dirname + '/schema/'),
    context: ({ req }) => utils.getInfoRequest(req)
});