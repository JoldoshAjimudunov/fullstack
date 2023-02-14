import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_PRODUCTS } from "../../const";

export const productContext = createContext();

const INIT_STATE = {
  products: [],
  categories: [],
  oneProduct: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [error, setError] = useState([]);

  // console.log(state);

  const navigate = useNavigate();

  async function getProducts() {
    try {
      const res = await axios(`${API_PRODUCTS}`);
      // console.log(res.data);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // async function getCategories() {
  //   try {
  //     const res = await axios(`${API_CATEGORY}list/`);
  //     dispatch({
  //       type: "GET_CATEGORIES",
  //       payload: res.data.results,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     setError(error);
  //   }
  // }

  async function addProducts(product) {
    try {
      const res = await axios.post(`${API_PRODUCTS}`, product);
      navigate("/products");
      // console.log(res.data);
      // navigate("/products");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  async function deleteProduct(id) {
    await axios.delete(`${API_PRODUCTS}/${id}`);
    getProducts();
  }

  async function getOneProduct(id) {
    try {
      const res = await axios(`${API_PRODUCTS}/${id}`);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  async function editProduct(product) {
    try {
      const res = await axios.patch(`${API_PRODUCTS}/${product.id}`, product);
      getProducts();
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  let value = {
    products: state.products,
    oneProduct: state.oneProduct,

    getOneProduct,
    getProducts,
    addProducts,
    deleteProduct,
    editProduct,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
