import React from "react";
import BookCover from "./BookCover";

export default function Books(props) {
  const { books } = props;
  console.log(books);

  const style = {
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      margin: "40px 50px",
      justifyContent: "center"
    }
  };

  return (
    <div style={style.flexContainer}>
      {books.map((book, index) => {
        return <BookCover index={index} book={book} />;
      })}
    </div>
  );
}
