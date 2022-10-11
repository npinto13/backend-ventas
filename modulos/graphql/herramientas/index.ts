import { GraphQLModule } from '@graphql-modules/core';
import { GraficosModule} from "./graficos"
import { ReportesModule } from './reportes';


export const HerramientasModule = new GraphQLModule({
  name: 'Herramientas',
  imports: [
    GraficosModule,
    ReportesModule,
  ],

});