import dotenv from "dotenv";

dotenv.config();

export const config = {
  server: {
    port: process.env.PORT || 8080,
    environtment: process.env.ENVIRONMENT || "development",
    origin: process.env.ORIGIN || "",
    sessionSecret: process.env.SESSION_SECRET || "",
  },
};
