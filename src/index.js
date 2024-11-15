import express from 'express';
import paymentRoutes from './routes/payment.routes.js';
import { PORT } from './config.js';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'https://videojuegos-project-adrian.netlify.app'
}));

app.use(express.json());

app.use(paymentRoutes);

app.listen (PORT, () => {
    console.log('Server is running on port ' + PORT);
});