import { apiRouter } from '@app-ae/api/routers';
import express from 'express';

const { API_NAME } = process.env;
const app = express().use(express.json()).use(`/${API_NAME}`, apiRouter);

export { app };
