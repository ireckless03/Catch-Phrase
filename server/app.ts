require('dotenv').config();
import express from 'express';
import Mongo from './db/db';
const app = express();
const PORT = process.env.PORT;

// connect to database
Mongo();
//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// GET routes
app.get('/', (req, res) => {
  res.json('Welcome');
});

// requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
