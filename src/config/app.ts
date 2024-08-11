import express, { Express, Request, Response } from "express";
import cors from "cors";
import session from "express-session";
import { config } from "./config";
import routes from "../routes";

export const configureApp = (app: Express): void => {
  app.use(
    cors({
      origin: [config.server.origin],
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    session({
      secret: config.server.sessionSecret,
      saveUninitialized: false,
      resave: false,
      cookie: { maxAge: 60000 * 60 * 24 * 7 },
    })
  );

  app.use("/api/v1", routes);

  app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });
};
