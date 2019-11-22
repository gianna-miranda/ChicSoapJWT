require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const productsAPI = require("./routes/productsAPI");
const usersRoutes = require("./routes");
const app = express();
const mongouri = process.env.ATLAS_URI;
const port = process.env.PORT;

mongoose.set("useCreateIndex", true);
mongoose.connect(mongouri, { useNewUrlParser: true }, err => {
  console.log(err || `Connected to MongoDB.`);
});

app.use(express.static(`${__dirname}/client/build`));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({ message: "API root" });
});

app.use("/api", productsAPI);

app.use("/api/users", usersRoutes);

app.use("*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(port, err => {
  console.log(err || `Server running on port ${port}.`);
});