import * as express from "express";

const PORT = process.env.PORT || 3004;

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello world!");
});

app.listen(PORT, () => console.log(`Server at: ${PORT}`));
