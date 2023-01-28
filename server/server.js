const express = require("express");
const app = express();
const cors = require('cors');
const port = 8000;

const connectDb = require("./config/mongoose.config")
connectDb();

app.use(cors());

app.use(express.json());

const pirateRouter = require("./routes/pirate_routes")
app.use('/api/pirates', pirateRouter);

app.listen(port, () => console.log(`Listening on port: ${port}`));