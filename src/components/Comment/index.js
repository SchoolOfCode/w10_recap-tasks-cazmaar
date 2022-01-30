import React from "react";
import css from "./comment.module.css";

function Comment({ name, text }) {
  return (
    <div>
      <p className={css.comment}>{name} Says:</p>
      <p className={css.comment}>{text}</p>
    </div>
  );
}

export default Comment;
