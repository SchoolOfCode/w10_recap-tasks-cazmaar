import React from "react";

function Comment({name, text}) {
  return (
    <div>
      <p>{name} Says:</p>
      <p>{text}</p>
    </div>
  );
}

export default Comment;
