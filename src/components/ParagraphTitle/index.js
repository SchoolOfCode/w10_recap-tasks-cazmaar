import React from 'react';
import css from "./paragraphtitle.module.css"

function ParagraphTitle({title}) {
  return <h2 className={css.title}>{title}</h2>;
}

export default ParagraphTitle;
