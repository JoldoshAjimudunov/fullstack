import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import axios from "axios";
import { API_PRODUCTS } from "../../const";
import { Link } from "react-router-dom";
import { productContext } from "../Contexts/ProductContextProvider";
import { useCart } from "../Contexts/CartContextProvider";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function MyCard({ product }) {
  const { deleteProduct, toggleLike } = React.useContext(productContext);
  const { addProductToCart } = useCart();
  return (
    <Card sx={{ width: 345, margin: "3%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="success">
          {product.price} $
        </Button>
        <Button
          size="small"
          color="error"
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </Button>
        <Link to={`/edit/${product.id}`}>
          <Button
            size="small"
            style={{
              backgroundColor: "brown",
              color: "white",
              margin: "0 5px",
            }}
          >
            Edit
          </Button>
        </Link>
        <Button
          onClick={() => {
            addProductToCart(product);
          }}
          style={{ backgroundColor: "brown", color: "white", height: "31px" }}
        >
          add
        </Button>
      </CardActions>
    </Card>
  );
}
