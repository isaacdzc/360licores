const express = require("express");
const cors = require('cors');
const config = require('./config')

const app = express();

app.use(express.json());
app.use(cors());

//Settings
const PORT = config.PORT || 3000;

app.listen(PORT, () => {
  console.log("Don't burn the witch");
});

//Routes
app.get('/', (req, res) => res.send(
  {message: "Don't burn the witch",
  status: "OK"}));

const products_route = require("../routes/products_route");
const stock_route = require("../routes/stock_route");
const billing_route = require("../routes/billing_route");

app.use(
  products_route,
  stock_route,
  billing_route,
  );