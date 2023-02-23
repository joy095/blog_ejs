const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const authRouter = require("./Routes/authRoute");
const { log } = require("console");

app.set("views", "./view");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "view")));
// app.use("/", authRouter);
console.log(fs.readdirSync(`${__dirname}/Routes`));
fs.readdirSync(`${__dirname}/Routes`).map((filename) => {
  app.use(
    "/",
    require(path
      .join(`${__dirname}`, "/Routes", `${filename}`)
      .replace(".js", ""))
  );
});

app.get("/", (req, res) => {
  res.send("home");
});
app.listen(8000, () => {
  console.log("server is running on port 8000");
});
