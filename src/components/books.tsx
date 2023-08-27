import React from "react";
import "../style/books.css";
import { useSelector } from "react-redux";
import fst from "./static/firstBook.jpg";
import snd from "./static/secondBook.jpg";
import trd from "./static/thirdBook.jpg";
import fth from "./static/fourthBook.jpg";
import useParallax from "../hooks/useParallax";

// TODO: Переписать элемент на хук useParallax
const Books = () => {
  const result = useSelector((state: any) => state.books);
  const books = [fst, snd, trd, fth];
  const { startBlock, selectedElement } = useParallax();
  startBlock();
  selectedElement();

  return (
    <div className="parallax__example">
      <div className="books">
        <div className="books__wrapper">
          <div className="name">Daralis: the world beyond the border</div>
          <div className="description">
            <p>
              Explore the world of the corrupted reality in its various times.
              <br />
            </p>
          </div>
          <div className="books__placement">
            {result.map((e: any) => {
              return (
                <div key={e.id} className="book">
                  <div className="book__deco">
                    <div className="wrapper__book">
                      <img src={books[e.serial - 1]} alt="book.img" />
                    </div>
                  </div>
                  {e.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="book__path__of__hope">
        <div className="hope__wrapper">
          <img src={books[0]} alt="book.img" />
        </div>
      </div>
    </div>
  );
};

export default Books;
