import cors from "cors";
import { Application } from "express";

export default function setupCors(app: Application) {
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );
}
