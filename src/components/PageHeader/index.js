import React from "react";
import css from "./PageHeader.module.css";

function PageHeader({ heading }) {
  return <h1 className={css.header}>{heading}</h1>;
}

export default PageHeader;
