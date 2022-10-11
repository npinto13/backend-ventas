import { GraphQLModule } from '@graphql-modules/core';
import { GeneralModule } from './general/';
import { SeguridadModule } from './seguridad/';
import { MedicionesModule } from './mediciones/';

export const ConfiguracionModule = new GraphQLModule({
  name: 'Configuracion',
  imports: [
    GeneralModule,
    SeguridadModule,
    MedicionesModule
  ],

});