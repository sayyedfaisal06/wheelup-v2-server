import express, { Express } from "express";
import http from "http";
import { configureApp } from "./config/app";
import { config } from "./config/config";

const app: Express = express();
const server: http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
> = http.createServer(app);
const port = config.server.port;

const main = async () => {
  configureApp(app);
  server.listen(port, () => {
    console.log(
      `⚡[server]: Server is running at http://localhost:${port} in ${config.server.environtment} env`
    );
  });
};

main();
