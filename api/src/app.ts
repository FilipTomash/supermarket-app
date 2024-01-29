import express from "express";
import cors from "cors";
import helmet from "helmet";
import { productsRouter } from "./products/products.routes";

const PORT = 7000;
const HOST = "0.0.0.0";

// Creating the server.

const app = express();

// Adding middlewares to the server to accept JSON requests,
// allow cross-origin requests and protects the app from security threats.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/api", productsRouter);

// Starting the server.

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on port ${PORT}`);
});
