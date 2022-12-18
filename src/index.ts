import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import compression from 'compression';
import helmet from 'helmet';
import Express from 'express';
import routes from './routes';
import { generateToken } from './utils/jwt.utils';
import errorHandler from './middlewares/error.handler.middleware';
dotenv.config();
const PORT = process.env.PORT;
const app: Express.Application = Express();

// compresses all the responses
app.use(compression());

// adding set of security middlewares
app.use(helmet());
app.get('/token', (req: Express.Request, res: Express.Response) => {
  res.send(generateToken());
});
app.use(bodyParser.json());
app.use('/api', routes.router);
app.use(errorHandler);
app.listen(PORT);
