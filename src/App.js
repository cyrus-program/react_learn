import React, { useEffect, useState } from "react";
import "./app.css";
import { movies } from "./movies";
import Movie from "./movie";
import { Getmyapi } from "./getApi";
import { App } from "./carcomponent";

function MovieList() {
  const [size, setsize] = useState(window.innerWidth);
  const [fruit, setfruit] = useState("apple");
  const [number, setnumber] = useState(1);
  const [obj, setobj] = useState([
    { id: 1, fruits: "apple" },
    {
      id: 2,

      fruits: "banana",
    },
    { id: 3, fruits: "orange" },
  ]);
  const changeobj = (id) => {
    setobj(obj.filter((fil) => fil.id !== id));
  };

  const changefruit = () => {
    if (fruit === "apple") {
      setfruit("orange");
    } else {
      setfruit("apple");
    }
  };
  const changenumber = () => {
    setInterval(() => setnumber((number) => number + 1), 2000);
  };
  // useEffect(() => {
  //   document.title = `new message ${number}`;
  // });
  const checksize = () => setsize(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", checksize);
    return () => {
      window.removeEventListener("resize", checksize);
    };
  });
  return (
    <div class="maindiv">
      <div>
        <div className="movielist">
          {movies.map((movie) => {
            return <Movie key={movie.id} {...movie} />;
          })}
        </div>
        <Getmyapi />
        <App />
        <p>{size}</p>

        <p className="para">{fruit}</p>
        <button onClick={changefruit} className="button">
          change fruits
        </button>
        <p className="para">{number}</p>
        <button onClick={changenumber} className="button">
          change number
        </button>
        <h1>
          {obj.map((objs) => {
            const { id, fruits } = objs;
            return (
              <div key={id}>
                <p className="fruits">{fruits}</p>
                <button onClick={() => changeobj(id)}>delete</button>
              </div>
            );
          })}
          <button onClick={() => setobj([])}>change obj</button>
        </h1>
      </div>
    </div>
  );
}

export default MovieList;
