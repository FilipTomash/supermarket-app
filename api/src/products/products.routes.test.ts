import request from "supertest";
import express, { Express } from "express";
import { productsRouter } from "./products.routes";
import * as productsDB from "./products.database";
import { Product } from "./products.interface";
import { StatusCode } from "../utils/index";

jest.mock("../products/products.database.ts", () => ({
  loadProducts: jest.fn(),
}));

const app: Express = express();
app.use(express.json());
app.use("/api", productsRouter);

describe("GET /api/products", () => {
  test("should return products when products are available", async () => {
    const mockProducts: Product[] = [
      {
        name: "TestProduct",
        domestic: true,
        price: 10,
        description: "Test product description",
      },
    ];

    (productsDB.loadProducts as jest.Mock).mockResolvedValueOnce(mockProducts);

    const response = await request(app).get("/api/products");

    expect(response.status).toBe(StatusCode.OK);
    expect(response.body).toEqual(mockProducts);
  });

  test("should return 404 when no products are available", async () => {
    (productsDB.loadProducts as jest.Mock).mockResolvedValueOnce(undefined);

    const response = await request(app).get("/api/products");

    expect(response.status).toBe(StatusCode.NOT_FOUND);
    expect(response.body).toEqual({ msg: "No products at this time..." });
  });

  test("should return 500 on server error", async () => {
    (productsDB.loadProducts as jest.Mock).mockRejectedValueOnce(
      new Error("Test Error")
    );

    const response = await request(app).get("/api/products");

    expect(response.body.error).toBeDefined();
    expect(response.status).toBe(StatusCode.INTERNAL_SERVER_ERROR);
  });
});
