import React from "react";
import blogData from "../data/blog";

function Article(props) {
  return (
    <article>
      <h3>{props.title}</h3>
      <small>{props.date || "January 1, 1970"} {props.emojis.join(' ')} {props.minutes} min read</small>
      <p>{props.preview}</p>
      
    </article>
  );
}

export default Article;