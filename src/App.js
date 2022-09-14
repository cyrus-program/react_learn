import React, { useEffect, useState } from "react";
import Rout from "./router";
import "./app.css";
import {
  movies,
  Movie,
  Getmyapi,
  App,
  MyForm,
  Mystate,
  Pagination,
  MyReducer,
} from "./component";
import {
  signInWithRedirect,
  auth,
  provider,
  getRedirectResult,
  onAuthStateChanged,
} from "./config";

function MovieList() {
  const [signedIn, setsignedIn] = useState(false);
  const [user, setUser] = useState(null);
  const signIn = (event) => {
    event.preventDefault();
    signInWithRedirect(auth, provider);
  };

  const signOut = (event) => {
    event.preventDefault();
    auth.signOut();
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          //set the user...
          setsignedIn(true);
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const { displayName, email, photoURL, uid } = user;
        setUser({ displayName, email, photoURL, uid });
      } else {
        // User is signed out
        // ...
        setUser(null);
      }
    });
  }, []);

  return (
    <div>
      {user ? (
        <div style={{ textAlign: "center" }}>
          <div className="auth-title">welcome you are signed in</div>
          <img src={user.photoURL} alt="" />
          <div>{user.displayName}</div>
          <div>{user.email}</div>
          <button onClick={signOut} type="button" className="submit">
            sign out
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <div style={signedIn ? {} : { display: "none" }}>
            {" "}
            sign in successful
          </div>
          <div className="auth-title">sign in to access your account</div>
          <button onClick={signIn} type="button" className="submit">
            sign in
          </button>
        </div>
      )}
      <MyReducer />
      <Pagination />
      <Rout />
      <MyForm />
      <div className="movielist">
        {movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
      </div>
      <Getmyapi />
      <App />
      <Mystate />
    </div>
  );
}

export default MovieList;
