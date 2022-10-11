import { GraphQLModule } from '@graphql-modules/core';
import { ConfiguracionModule } from './configuracion/';
import { HerramientasModule } from './herramientas';

export const AppModule = new GraphQLModule({
  name: 'App',
  imports: [
    //GeneralModule,
    //SeguridadModule,
    //MedicionesModule
    HerramientasModule,
    ConfiguracionModule
    
  ],

});