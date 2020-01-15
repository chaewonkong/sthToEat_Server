import * as express from "express";
import * as cors from "cors";

const PORT = process.env.PORT || 3004;

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000"
  })
);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello world!");
});

app.listen(PORT, () => console.log(`Server at: ${PORT}`));
