import 'reflect-metadata';
import express, { Router } from 'express';
import createConnection from './database';
import { router } from './routes';

createConnection();

// instancia Servidor
const app = express();

// ROTAS
app.use(express.json());
app.use(router);

export { app }