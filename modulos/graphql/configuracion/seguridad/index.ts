import { GraphQLModule } from '@graphql-modules/core';
import { loadFilesSync } from '@graphql-tools/load-files';
import * as utils from '../../../utils'
import { UsuariosResolvers } from './resolvers/usuarios';
import {UtilsModule} from "../../utils";


export const SeguridadModule = new GraphQLModule({
    name: "Seguridad",
    resolvers: [
        UsuariosResolvers,
    ],
    imports: [UtilsModule],
    typeDefs: loadFilesSync(__dirname + '/schema/'),
    context: ({ req }) => utils.getInfoRequest(req)
});