import { TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { productContext } from "../context/ProductContextProvider";
import MyCard from "./MyCard";

const ProductList = () => {
  const { getProducts, products } = useContext(productContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState("");

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      q: value,
    });
  }, [value]);

  return (
    <div>
      <div>
        <div className="header-list">
          <span>
            <h1 className="menu-text">Menu</h1>
          </span>
          <span>
            <a href="#" className="oplata">
              Перейти к оплате
            </a>
          </span>
        </div>
        <hr className="hr-header" />
        <p className="p-text">
          Дорогие гости, <br />
          мы работаем для Вас <br />в режиме доставки с 12:00 до 22:30
        </p>

        <div>
          <input
            placeholder="Поиск"
            style={{ width: "75ch", height: "20px", marginLeft: "400px" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      {/* 1
      
      1
      1
      1
      1
      1
      1
      
      1
      1
      1
      1
      1
      
      1
      1
      1
      
      1
      1
      1
      1
      1
      1
      1
      1
      1
      
      1
      1
      1*/}
      <Link to="/create">
        <button>addProduct</button>
      </Link>
      <div style={{ display: "flex" }}>
        {products.map((product, index) => (
          <MyCard product={product} getProducts={getProducts} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
