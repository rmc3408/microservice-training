import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { corsConfig } from "./cors";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(cors(corsConfig));

app.get('/', (req, res) => {
  res.send('hi')
})
app.use((err, req, res, next) => {
  return res.status(500).json({
    message: err.message
  });
});



function startServer() {
    app.listen(PORT, () => {
    console.info(`LISTING service listening on ${PORT}`);
  });
}

export default startServer
