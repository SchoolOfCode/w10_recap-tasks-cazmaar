import React from "react";
import css from "./comment.module.css";

function Comment({ name, text }) {
  return (
    <div>
      <p data-testid="commentname" className={css.comment}>
        {name} Says:
      </p>
      <p data-testid="comment"  className={css.comment}>
        {text}
      </p>
    </div>
  );
}

export default Comment;
