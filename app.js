require('dotenv').config();
const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/product.routes');
const userRouter = require('./routes/user.routes');
const connect = require('./db/connect');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', productRouter);
app.use('/users', userRouter);

app.use('*', (req, res) => {
  res.status(404).send('not found');
});
const PORT = process.env.PORT || 4000;

const start = async () => {
  await connect(process.env.MONGO_URI);
  app.listen(PORT, () => console.log(`server is running on port ${PORT} `));
};

start();
