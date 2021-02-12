const dotenv = require('dotenv')

import { app } from "./app";

dotenv.config({ path: __dirname+'/.env' });

app.listen(
    process.env.portNode?parseInt(process.env.portNode):3000,
    process.env.HOST?process.env.HOST:'0.0.0.0'
)