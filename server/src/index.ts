import express from "express";
import "dotenv-safe/config";

import userRoute from "./routes/user/user";
import setupSession from "./config/setupSession";
import setupCors from "./config/setupCors";

const app = express();

app.set("trust proxy", 1);
setupCors(app);
app.use(express.json());
setupSession(app);

// routes
app.use("/user", userRoute);

app.listen(process.env.PORT, () =>
  console.log(`🚀 server is listening on port ${process.env.PORT}`)
);
