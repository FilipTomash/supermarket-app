import express, { Request, Response } from "express";
import * as productsDB from "./products.database";
import { Product } from "./products.interface";
import { StatusCode } from "../utils/index";

export const productsRouter = express.Router();

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
