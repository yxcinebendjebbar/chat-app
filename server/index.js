import express from "express";
import cors from "cors";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(cors());
app.use(express.json());

const startServer = () => {
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
};

startServer();
