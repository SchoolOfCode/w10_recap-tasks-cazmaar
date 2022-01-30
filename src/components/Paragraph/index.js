import React from 'react';
import css from "./Paragraph.module.css"

function Paragraph({text}) {
  return <p className={css.paragraph}>{text}</p>;
}

export default Paragraph;
