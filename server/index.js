import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
const app = express();

import uRoutes from './routes/users.js';
import lRoutes from './routes/leads.js';

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use(cors());

app.use('/users', uRoutes);
app.use('/leads', lRoutes);

const CONNECTION_URL = 'mongodb+srv://mohibkb:mongokik@cluster0.c96oz.mongodb.net/testdb?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);