import React from "react";
import Article from "./ArticleList";

function ArticleList(props) {
  return (
    <main>
      {props.posts.map((post) => {
        // Calculate the number of coffee cups and bento boxes based on the read time
        const minutesToRead = post.minutes;
        const coffeeCups = Math.ceil(minutesToRead / 5);
        const bentoBoxes = Math.ceil(minutesToRead / 10);

        // Create an array of coffee cup and bento box emojis
        const coffeeCupEmojis = Array(coffeeCups).fill("☕️");
        const bentoBoxEmojis = Array(bentoBoxes).fill("🍱");

        return (
          <Article
            key={post.id} 
            title={post.title}
            date={post.date || "January 1, 1970"}
            preview={post.preview}
            minutes={post.minutes}
            emojis={[...coffeeCupEmojis, ...bentoBoxEmojis]}
          />
        );
      })}
    </main>
  );
}

export default ArticleList;