const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./config/db");


const app = express();
const PORT = 3000;

connectDb();

require("./models/Person");
app.use(express.json());

app.use("/person", require("./routes/index"));

app.get("/*", (req, res) => {
    res.render("error-404");
});

app.listen(PORT, ()=> {
    console.log(`Server is runnig on port ${PORT}`);
});