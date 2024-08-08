import axios from "axios";

const api_url = "https://fakestoreapi.com/products/";

export const fetchdata = async () => {
  try {
    const response = await axios.get(api_url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
