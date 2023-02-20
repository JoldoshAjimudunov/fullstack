import React, { useContext, useEffect } from "react";
import { commentContext } from "../Contexts/CommentContextProvider";
import cl from "./comments.module.css";

const CommentList = () => {
  const { comment, getComments } = useContext(commentContext);

  useEffect(() => {
    getComments();
  }, []);

  console.log(comment);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {comment.map((item) => (
          <div key={item.id}>
            <div className={cl.comm__item}>{item.task}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
