import express, { Request, Response } from "express";
import * as productsDB from "./products.database";
import { Product } from "./products.interface";
import { StatusCode } from "../utils/index";

export const productsRouter = express.Router();

// Using express router to define a get route, then calling the loadProducts function to get the data.
// Throwing correspondig errors if we don't get the requested data, or returning the data it if the response was a success.

productsRouter.get("/products", async (req: Request, res: Response) => {
  try {
    const products: Product[] | undefined = await productsDB.loadProducts();

    if (!products) {
      return res
        .status(StatusCode.NOT_FOUND)
        .json({ msg: "No products at this time..." });
    }

    return res.status(StatusCode.OK).json(products);
  } catch (error) {
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ error });
  }
});
