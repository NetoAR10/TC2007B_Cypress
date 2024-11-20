const express = require("express")
const mongoose = require("mongoose")

const app = express();

//set template engine
app.set("view engine", "ejs");

app.use("", require("./routes/routes"));

//app.get("/", (req, res) => {
//    res.send("Hello World");
//});

app.get("/todo", (req, res) => {
    res.send("")
})

app.listen(3000, () => {
    console.log("Server is runniing on port 3000");
});

