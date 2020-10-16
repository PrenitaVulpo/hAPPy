import express from 'express';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import path from 'path';
import errorHandler from './errors/handler';
import cors from 'cors';

const app = express();

//se estiver em produção, adicionar {origin:}
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/images', express.static(path.join(__dirname, '..', 'images')))
app.use(errorHandler);

app.listen(3333);