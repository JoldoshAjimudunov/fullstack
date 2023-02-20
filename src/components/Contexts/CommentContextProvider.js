import axios from "axios";
import React, { createContext, useReducer } from "react";
import { API_COMMENTS } from "../../const";

export const commentContext = createContext();

const INIT_STATE = {
  comment: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_COMMENTS":
      return { ...state, comment: action.payload };
    default:
      return state;
  }
};

const CommentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getComments = async () => {
    const { data } = await axios("http://localhost:8000/comments");
    dispatch({
      type: "GET_COMMENTS",
      payload: data,
    });
  };

  const addComment = async (newComment) => {
    await axios.post("http://localhost:8000/comments", newComment);
    getComments();
  };

  return (
    <commentContext.Provider
      value={{ comment: state.comment, addComment, getComments }}
    >
      {children}
    </commentContext.Provider>
  );
};

export default CommentContextProvider;
