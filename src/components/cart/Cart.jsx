import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContextProvider";
// import NavbarProd from "../NavbarProd";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, getCart, clearCart } = useCart();
  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      {/* <NavbarProd /> */}
      <h1>My Cart</h1>
      <Container>
        {cart?.products.map((cartItem) => {
          {
            return <CartItem item={cartItem} key={cartItem.item.id} />;
          }
        })}
      </Container>
      <Container>
        <Button
          style={{
            backgroundColor: "rgb(14, 210, 0)",
            color: "white",
            borderColor: "white",
            border: "none",
            margin: "4px",
            width: "80px",
            height: "25px",
            borderRadius: "10px",
            textAlign: "center",
            fontSize: "large",
            margin: "0 auto",
            padding: "10px 10px",
          }}
          variant="outlined"
          onClick={clearCart}
        >
          BUY
        </Button>
        <Typography fontSize={21}> Total Price: {cart?.totalPrice}$</Typography>
      </Container>
    </>
  );
};

export default Cart;
