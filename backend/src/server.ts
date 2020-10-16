import express from 'express';
import './database/connection';
import routes from './routes';
import path from 'path';
import 'express-async-errors';
import errorHandler from './errors/handler'

const app = express();
app.use(express.json());
app.use(routes);
app.use(errorHandler);
app.use('/images', express.static(path.join(__dirname, '..', 'images')))

app.listen(3333);