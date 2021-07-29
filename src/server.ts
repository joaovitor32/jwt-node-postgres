/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-unresolved */
import app from "./app";

const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/.env` });

app.listen(
  process.env.portNode ? parseInt(process.env.portNode, 10) : 3000,
  process.env.HOST ? process.env.HOST : "0.0.0.0"
);
