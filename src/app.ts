import express,{Application} from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index.routes';


export class App {
  
 public app: Application = express();
  constructor(private port?: number | string){
    this.app = express();
    this.settings();
    this.middewares();
    this.routes();
  }

  settings (){
    this.app.set('port', this.port || process.env.PORT || 3000);
  }

  middewares(){
    this.app.use(morgan('dev'));
  }

  routes(){
    this.app.use(indexRoutes);
  }

  async listen(){
  this.app.listen(this.app.get('port'));
    console.log('server listening on port', this.app.get('port')); 
  }

  }
