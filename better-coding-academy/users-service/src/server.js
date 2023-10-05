import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import setupRoutes from "./routes/routes";

const PORT = process.env.PORT || 3002;

const app = express();
app.use(bodyParser.json());

const corsConfig = {
  origin: (origin, cb) => cb(null, true),
  credentials: true,
  preflightContinue: true,
  exposedHeaders: [
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
    "X-Password-Expired"
  ],
  optionsSuccessStatus: 200
}
app.use(cors(corsConfig));

setupRoutes(app)

app.use((err, req, res, next) => {
  return res.status(500).json({
    message: err.message
  });
});

function startServer() {
    app.listen(PORT, () => {
    console.info(`USERS service listening on ${PORT}`);
  });
}

export default startServer
