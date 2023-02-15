import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import axios from "axios";
import { API_PRODUCTS } from "../../const";
import { productContext } from "../context/ProductContextProvider";
import { Link } from "react-router-dom";

export default function MyCard({ product }) {
  const { deleteProduct } = React.useContext(productContext);

  return (
    <Card sx={{ maxWidth: 345, margin: "3%" }}>
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
        <Button size="small" color="primary">
          {product.price}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </Button>
        <Link to={`/edit/${product.id}`}>
          <Button size="small" color="primary">
            Edit
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
