/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();

export default {
  jwt: {
    secret: process.env.secret || "default",
    expires: "1d",
  },
};
