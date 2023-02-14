import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContextProvider";
// import NavbarProd from "../NavbarProd";
import CartItem from "./CartItem";
import cl from "./Cart.module.css";

const Cart = () => {
  const { cart, getCart, clearCart, credit } = useCart();
  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      {/* <NavbarProd /> */}
      <h1 style={{ textAlign: "center" }}>My Cart</h1>
      <div className={cl.cart}>
        {cart?.products.map((cartItem) => {
          {
            return <CartItem item={cartItem} key={cartItem.item.id} />;
          }
        })}
      </div>
      <Container>
        <Button
          style={{
            display: "flex",
            backgroundColor: "rgb(14, 210, 0)",
            color: "white",
            borderColor: "white",
            border: "none",
            margin: "4px",
            width: "200px",
            height: "25px",
            borderRadius: "10px",
            textAlign: "center",
            fontSize: "large",
            margin: "0 auto",
            padding: "10px 10px",
            justifyContent: "center",
          }}
          variant="outlined"
          onClick={credit}
        >
          BUY
        </Button>
        <Typography
          style={{
            width: "200px",
            height: "25px",
            borderRadius: "10px",
            textAlign: "center",
            fontSize: "large",
            margin: "0 auto",
            padding: "10px 10px",
            justifyContent: "center",
          }}
          fontSize={21}
        >
          {" "}
          Total Price: {cart?.totalPrice}$
        </Typography>
      </Container>
    </>
  );
};

export default Cart;
