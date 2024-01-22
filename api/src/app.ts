import express from "express";
import cors from "cors";
import helmet from "helmet";
import { productsRouter } from "./products/products.routes";

const PORT = 7000;
const HOST = "0.0.0.0";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/api", productsRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on port ${PORT}`);
});
