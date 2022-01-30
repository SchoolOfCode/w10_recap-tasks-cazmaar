import React from "react";
import css from "./button.module.css"

function Button() {
  return (
    <div>
      <button className={css.likeButton}>Like 👍</button>
    </div>
  );
}

export default Button;
