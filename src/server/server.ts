import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
// const mongoose = require('mongoose');
import apiRouter from './routes';
import logger from './middleware/logger';
const mongoose = require('mongoose');

const path = require('path');
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch((err:any) => console.log(err));
const app: express.Application = express();

// Init middleware
app.use(logger);

app.use(cors())
// body-parser (express middleware) that reads a form's input and stores it as a javascript object accessible through req.body
app.use(bodyParser.json());

// API Routes
app.use('/api', apiRouter);

// Path used by client /*
app.use(express.static(path.join(__dirname, '../public')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

const port: number = Number(process.env.PORT) || 8000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
