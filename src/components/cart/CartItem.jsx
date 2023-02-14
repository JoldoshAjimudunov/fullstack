import { Button, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useCart } from "../contexts/CartContextProvider";
import cl from "./Cart.module.css";

const CartItem = ({ item }) => {
  const { changeProductCount, deleteCartProduct } = useCart();

  return (
    <Grid className={cl.cart__cont} container spacing={2} alignItems="center">
      <Grid className={cl.cart__img}>
        <Box
          component="img"
          sx={{
            height: 50,
            width: 50,
          }}
          src={item.item.img}
          alt={item.item.title}
        />
      </Grid>
      <Grid className={cl.cart__title}>
        <Typography
          className={cl.cart__item}
          gutterBottom
          variant="p"
          component="div"
        >
          {item.item.title}
        </Typography>
      </Grid>
      <Grid>
        <Typography
          className={cl.cart__item}
          gutterBottom
          variant="p"
          component="div"
        >
          {item.item.type}
        </Typography>
      </Grid>
      <Grid>
        <Typography
          className={cl.cart__item}
          variant="p"
          color="text.secondary"
        >
          Price: {item.item.price}$
        </Typography>
      </Grid>
      <Grid>
        <Typography
          className={cl.cart__item}
          variant="p"
          color="text.secondary"
        >
          {" "}
          <input
            type="number"
            value={item.count}
            onChange={(e) => changeProductCount(e.target.value, item.item.id)}
            min={1}
            max={100}
          ></input>
        </Typography>
      </Grid>
      {/* <Grid item>
        <Typography
          className={cl.cart__item}
          variant="p"
          color="text.secondary"
        >
          SubPrice: {item.subPrice}$
        </Typography>
      </Grid> */}
      <Grid>
        <Button
          style={{
            backgroundColor: "#eb5349",
            color: "white",
            borderColor: "white",
            border: "none",
            margin: "4px",
            width: "80px",
            height: "25px",
            borderRadius: "5px",
            textAlign: "center",
            fontSize: "small",
            margin: "0 auto",
          }}
          variant="outlined"
          size="small"
          onClick={() => deleteCartProduct(item.item.id)}
        >
          Remove
        </Button>
      </Grid>
    </Grid>
  );
};

export default CartItem;
