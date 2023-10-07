import express from 'express';
import { saveSentEmails, getEmails, moveEmailsToBin, toggleStarredEmails, deleteEmails } from '../controllers/email-controller.js';

const routes = express.Router();

// routes.post('/save', () => {
  // this part of code will be executed when save command is received from front-end  
// })

// but instead of writing our code in this file, we can just write the name of the function which we want to call (those functions are written in the controllers folder)

routes.post('/save', saveSentEmails);
routes.get('/emails/:type', getEmails);
routes.post('/save-draft', saveSentEmails);
routes.post('/bin', moveEmailsToBin);
routes.post('/starred', toggleStarredEmails);
routes.delete('/delete', deleteEmails);

export default routes;