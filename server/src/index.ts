import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT, () => {
  console.log("server is listening on port", process.env.PORT);
});
