import express from "express";
import { createServer } from "http";

import "dotenv-safe/config";

import userRoute from "./routes/user/user";
import setupSession from "./config/setupSession";
import setupCors from "./config/setupCors";
import setupAndGetIo from "./config/setupAndGetIo";
import ioHandler from "./io/ioHandler";

const app = express();

app.set("trust proxy", 1);
app.use(express.json());
setupCors(app);
setupSession(app);

app.use("/user", userRoute);

const server = createServer(app);
export const io = setupAndGetIo(server);
ioHandler(io);

server.listen(3000, () => {
  console.log("listening on *:3000");
});
