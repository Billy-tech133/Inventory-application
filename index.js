const express = require('express');
const indexRouter = require('./routes/indexRouter');
const path = require('node:path')
const expressLayouts = require('express-ejs-layouts');


const app = express();

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(expressLayouts)
app.set('layout', 'layout')

const publicPath = path.join(__dirname, "public")
app.use(express.static(publicPath));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', indexRouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Inventory server running on port ${PORT}`);
});