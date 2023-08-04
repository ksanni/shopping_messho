import React, { createContext, useState, useEffect} from "react";

export const ProductContext = createContext();

export const AppContext = (props) => {
  const [products, setProducts] = useState([]);
  const [searchData, setSearchData] = useState('');
  
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cartData"));
    if (storedData) {
      setProducts(storedData);
    } else {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.map(p => ({...p, qty: 1, inCart: false}))))
      .catch((error) => console.log(error));
    }
  }, []);

  const addToCart = (productId) => {
    const updatedProducts = products.map((p) => {
      if (p.id === productId) {
        return {
          ...p,
          inCart: true,
          qty: p.qty + 1
        };
      }
      return p;
    });
    setProducts(updatedProducts);
    localStorage.setItem("cartData", JSON.stringify(updatedProducts));
  };
  const increaseQty = (product) => {
    const updatedProducts = products.map((p) => {
      if (p.id === product.id) {
        return {
          ...p,
          qty: p.qty + 1,
          inCart: true,
        };
      }
      return p;
    });
    setProducts(updatedProducts);
    localStorage.setItem("cartData", JSON.stringify(updatedProducts));
  };

  const decreaseQty = (product) => {
    const updatedProducts = products.map((p) => {
      if (p.id === product.id) {
        return {
          ...p,
          qty: p.qty - 1,
          inCart: p.qty - 1 > 0,
        };
      }
      return p;
    });
    setProducts(updatedProducts);
    localStorage.setItem("cartData", JSON.stringify(updatedProducts));
  };

  const removeProduct = (product) => {
    const updatedProducts = products.map((p) => {
      if (p.id === product.id) {
        return {
          ...p,
          qty: 0,
          inCart: false,
        };
      }
      return p;
    });
    setProducts(updatedProducts);
    localStorage.setItem("cartData", JSON.stringify(updatedProducts));
  };



  return (
    <ProductContext.Provider value={{products,addToCart,increaseQty, decreaseQty, removeProduct,setSearchData,searchData }}>
      {props.children}
    </ProductContext.Provider>
  );
};


