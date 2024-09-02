import express from 'express';
import dotenv from 'dotenv'
import mongoDb from './config/mongodb.js';
import userRoutes from './routes/userRoute.js'
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();
mongoDb();


const app = express();
app.use(cors());
app.use(bodyParser.json())

const PORT = process.env.PORT || 1000;

app.get('/', (req,res) => {
    res.send(`running on port ${PORT}`)
})
app.use('/api/user', userRoutes);

app.listen(PORT, console.log(`server running on port ${PORT}`) )