const express = require('express');
const indexRouter = require('./routes/indexRouter');
const path = require('node:path')


const app = express();

app.set("view engine", "ejs")
app.set(path.join(__dirname, "views"))


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', indexRouter);




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Inventory server running on port ${PORT}`);
});