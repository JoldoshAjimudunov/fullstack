import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { commentContext } from "../Contexts/CommentContextProvider";
import CommentList from "./CommentList";
import cl from "./comments.module.css";

const AddComment = () => {
  const [inpValue, setInputValue] = useState("");
  const { addComment } = useContext(commentContext);

  function handleClick() {
    let newObj = {
      task: inpValue,
      status: false,
    };
    addComment(newObj);
    setInputValue("");
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: " 50px ",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          value={inpValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          // style={{ width: "400px" }}
          className={cl.comm__inp}
        />
        <Button
          style={{
            backgroundColor: "brown",
            color: "white",
            height: "39px",
            width: "200px",
          }}
          onClick={handleClick}
        >
          оставить отзыв
        </Button>
      </div>
      <CommentList />
    </div>
  );
};

export default AddComment;
