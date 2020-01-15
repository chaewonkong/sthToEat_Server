import * as express from "express";
import * as cors from "cors";
import indexRouter from "./Routes";

const PORT = process.env.PORT || 3004;

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000"
  })
);

app.use("/", indexRouter);

app.listen(PORT, () => console.log(`Server at: ${PORT}`));
