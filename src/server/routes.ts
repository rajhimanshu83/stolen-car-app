import * as express from 'express';
import * as bcrypt from 'bcrypt';
import { handleSignin, handleRegister } from './controllers/auth';
import { handleGetComplains, handlePostComplains,handleGetBusyCops, handleUpdateComplainsStatus, handleAssignComplain, handleGetFreeCops } from './controllers/complains';

const router = express.Router();

// For Testing
router.get('/hello', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.json('Hello World');
    next()
});

// APIs
router.post('/signin', (req, res) => { handleSignin(req, res,bcrypt) });
router.post('/register', (req, res) => { handleRegister(req, res) });
router.get('/complains', (req, res) => { handleGetComplains(req, res) });
router.get('/unassigned/police', (req, res) => { handleGetFreeCops(req, res) });
router.get('/assigned/police', (req, res) => { handleGetBusyCops(req, res) });
router.post('/submit/complains', (req, res) => { handlePostComplains(req, res) });
router.put('/update/complain/:id', (req, res) => { handleUpdateComplainsStatus(req, res) });
router.post('/police/assign/auto', (req, res) => { handleAssignComplain(req, res) });

export default router;