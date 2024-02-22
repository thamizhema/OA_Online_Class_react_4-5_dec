const express = require("express");
const loginRouter = require("./route/login_route");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("I am working");
});

app.use("/user", loginRouter);

app.listen(8000, () => {
  console.log(`Server run on http://localhost:8000`);
});
