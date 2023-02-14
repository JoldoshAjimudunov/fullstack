import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { productContext } from "../context/ProductContextProvider";

const EditProduct = () => {
  const { getOneProduct, editProduct, oneProduct } = useContext(productContext);
  const params = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

  return (
    <div>
      <Box>
        <TextField
          fullWidth
          sx={{ m: 1 }}
          variant="outlined"
          id="standart-basic"
          label="title"
          value={product.title || ""}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />
        <TextField
          fullWidth
          sx={{ m: 1 }}
          variant="outlined"
          id="standart-basic"
          label="description"
          value={product.description || ""}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <TextField
          fullWidth
          sx={{ m: 1 }}
          variant="outlined"
          id="standart-basic"
          label="price"
          value={product.price || ""}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <TextField
          fullWidth
          sx={{ m: 1 }}
          variant="outlined"
          id="standart-basic"
          label="category"
          value={product.category || ""}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        />
        <TextField
          fullWidth
          sx={{ m: 1 }}
          variant="outlined"
          id="standart-basic"
          label="image"
          value={product.image || ""}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />
        <Link to="/products ">
          <Button onClick={() => editProduct(product)}>Edit Product</Button>
        </Link>
      </Box>
    </div>
  );
};

export default EditProduct;
