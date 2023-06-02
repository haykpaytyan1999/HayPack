import axios from "axios";
import { HOST } from "../config";

export const getProducts = async () => {
  try {
    const data = await axios
      .get(`http://${HOST}:3050/product`)
      .then(res => res.data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async ({ id }) => {
  try {
    const data = await axios
      .get(`http://${HOST}:3050/product/${id}`)
      .then(res => res.data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
