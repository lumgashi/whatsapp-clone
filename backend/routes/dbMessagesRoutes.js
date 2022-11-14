import express from 'express'
import { getMessage,postMessage,syncMessage } from '../Controller/dbMessageCtrl.js';

const dbMessagesRoutes = express.Router();


dbMessagesRoutes.get('/', getMessage);
dbMessagesRoutes.post('/new', postMessage);
dbMessagesRoutes.get('/sync', syncMessage);




export default dbMessagesRoutes;

