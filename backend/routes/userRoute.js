import express from  'express'
import { addUser,updateUser,deleteUser,allUsers } from '../controller/userController.js';

const router = express.Router();

router.post('/NewUser', addUser);
router.patch('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);
router.get('/allUsers', allUsers)

export default router