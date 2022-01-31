import React from "react";
import css from "./button.module.css";
import { useState } from "react";

function Button() {
  const [likes, setLikes] = useState(0);

  function AddLikes() {
    let count = likes;
    count += 1;
    setLikes(count);
  }

  return (
    <div>
      <button
        data-testid="button"
        onClick={AddLikes}
        className={css.likeButton}
      >
        {likes} Likes 👍
      </button>
    </div>
  );
}

export default Button;
