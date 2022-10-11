import { GraphQLModule } from '@graphql-modules/core';
import { loadFilesSync } from '@graphql-tools/load-files';
import * as utils from '../../../utils'
import { UtilsModule } from "../../utils";
import { EdificiosResolvers } from './resolvers/edificios';
import { ServiciosResolvers } from './resolvers/servicios';
import { DispositivosResolvers } from './resolvers/dispositivos';
import { InstrumentosResolvers } from './resolvers/instrumentos';
import { PuntosResolvers } from './resolvers/puntos';
import { UnidadesResolvers } from './resolvers/unidades';
import { VariablesResolvers } from './resolvers/variables';


export const MedicionesModule = new GraphQLModule({
    name: "Mediciones",
    resolvers: [
        PuntosResolvers,
        UnidadesResolvers,
        ServiciosResolvers,
        VariablesResolvers,
        EdificiosResolvers,
        DispositivosResolvers,
        InstrumentosResolvers
    ],
    imports: [UtilsModule],
    typeDefs: loadFilesSync(__dirname + '/schema/'),
    context: ({ req }) => utils.getInfoRequest(req)
});