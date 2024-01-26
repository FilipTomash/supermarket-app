import { API_URL } from "../const/constants";
import { loadProducts } from "./products.database";
import { Product } from "./products.interface";
import { describe, afterEach, test, expect, jest } from "@jest/globals";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockProducts),
  } as Response)
);

const mockProducts: Product[] = [
  {
    name: "Pinaple",
    domestic: false,
    price: 10,
    description:
      "A sweet tropical fruit with a tough leathery skin and spiky leaves on top. Pineapple is excellent, whether eaten as a snack, in a sweet dessert, in savory dishes like fried rice, or even on pizza.",
  },
  {
    name: "Cabbage",
    domestic: true,
    price: 4.5,
    weight: 2,
    description:
      "Cabbage (Brassica oleracea) is a cruciferous vegetable. It is a leafy green or purple biennial plant, grown as an annual vegetable crop for its dense-leaved heads.",
  },
];

describe("loadProducts", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should load products successfully", async () => {
    const result = await loadProducts();

    expect(global.fetch).toHaveBeenCalledWith(API_URL);
    expect(result).toEqual(mockProducts);
  });

  test("should throw an error for non-OK response", async () => {
    jest
      .spyOn(global, "fetch")
      .mockResolvedValueOnce(
        new Response(null, { status: 404, statusText: "Not Found" })
      );

    await expect(loadProducts()).rejects.toThrowError(
      "HTTP error! Status: 404"
    );
  });

  test("should throw an error for network failure", async () => {
    jest
      .spyOn(global, "fetch")
      .mockRejectedValueOnce(new Error("Network error"));

    await expect(loadProducts()).rejects.toThrowError(
      "ERROR: Error: Network error"
    );
  });
});
