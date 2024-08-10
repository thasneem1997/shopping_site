import { createContext, useEffect, useState } from "react";
import { fetchdata } from "../service/Apiservice";

export const Storecontext = createContext();

const ContextProvider = (props) => {
  const [apiList, setApiList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;


//setting the fetched api from Apiservice to the setApiList 
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchdata();
        setApiList(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);


  //function for handling cart operations
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => product.id === item.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }//if  product is already in cart then increement the quantity by one
      return [...prevCart, { ...product, quantity: 1 }];//if not in cart then set quantity as one and add that to cart
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };




  const api = {
    error,
    loading,
    apiList,
    addToCart,
    removeFromCart,
    clearCart,
    cart,
    currentPage,
    setCurrentPage,
    itemsPerPage,
  };
  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <Storecontext.Provider value={api}>{props.children}</Storecontext.Provider>
  );
};

export default ContextProvider;
