import React from "react";
import "../style/blog.css";
import { useDispatch, useSelector } from "react-redux";
import crossPic from "./static/delete__post.png";

const Blog = () => {
  const setHistory = useDispatch();
  const postsArray = useSelector((state: any) => state.posts);
  function getVal(idName: string) {
    let a = document.getElementById(`${idName}`) as HTMLInputElement;
    return a.value;
  }

  function setVal(idName: string, val: string) {
    let a = document.getElementById(`${idName}`) as HTMLInputElement;
    a.value = val;
  }

  function postAdded(): void {
    let name: string = getVal("name");
    let description: string = getVal("description");
    if (!name.length || !description.length) {
      alert("Поля не могут быть пустыми.");
      return;
    }
    if (name.length > 255) {
      alert("Длина описания не должна превышать 255 символов.");
      return;
    }
    setHistory({ type: "ADD__POSTS", payload: [name, description] });
    setVal("name", "");
    setVal("description", "");
  }

  function postDeleted(e: any): void {
    if (
      !(
        String(
          prompt("Введите да, чтобы подтвердить удавление: "),
        ).toLowerCase() === "да"
      )
    )
      return;
    setHistory({ type: "REMOVE__POSTS", payload: e });
  }
  return (
    <div className="blog">
      <div className="wrapper">
        <div className="posts__creation">
          <input
            type="text"
            id="name"
            placeholder="Введите название поста..."
          />
          <textarea placeholder="Введите описание поста..." id="description" />
          <button onClick={() => postAdded()}>Разместить</button>
        </div>
        <div className="posts__place">
          {postsArray.map((e: any) => {
            return (
              <div className="post">
                <div className="post__form">
                  <div className="name__statement">
                    <h2>{e[0]}</h2>
                  </div>
                  <div className="description__statement">
                    <blockquote>{e[1]}</blockquote>
                  </div>
                </div>
                <img
                  src={crossPic}
                  onClick={() => postDeleted(e)}
                  className="delete"
                  alt="delete"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
