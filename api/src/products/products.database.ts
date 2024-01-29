import { Product } from "./products.interface";
import { API_URL } from "../const/constants";

// Using fetch to target the endpoing of the provided API and get the data.
// Throwing error if the response is not successful,fetch doesn't go into the catch block if we get a negative response,
// only if the request fails.

export const loadProducts = async (): Promise<Product[] | undefined> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    return data as Product[];
  } catch (error) {
    console.log(`Error: ${error}`);
    throw new Error(`ERROR: ${error}`);
  }
};
