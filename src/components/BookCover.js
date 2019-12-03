import React from "react";

export default function BookCover(props) {
  console.log(props);
  const { book, index } = props;
  console.log("oneBook", book);

  const style = {
    coverStyle: {
      width: "100%",
      padding: "30px"
    }
  };

  return (
    <div key={index} className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={book.cover} alt={book.title} style={style.coverStyle} />
        </div>
        <div className="flip-card-back">
          <h3>{book.title}</h3>
          <p> {book.description}</p>
          <button className="btn btn-outline-light event">
            <a href={book.detail} data-fancybox="gallery">
              SHOW MORE
            </a>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
