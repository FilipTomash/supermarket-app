import { Product } from "./products.interface";
import { API_URL } from "../const/constants";

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
