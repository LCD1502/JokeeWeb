import React, { useState, useEffect } from "react";
import logo from "./img/logo.png";
import sunflower from "./img/sunflower.jpg";
import "./App.css";
import ApiService from "./service/ApiService.js";

function App() {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    ApiService.getOneCurrentJoke()
      .then((res) => {
        setJoke(res.data.joke);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(joke);

  const getNextJoke = () => {
    ApiService.getOneNextJoke()
      .then((res) => {
        setJoke(res.data.joke);
      })
      .catch((err) => console.log(err));
  };

  const likeJoke = () => {
    ApiService.likeJoke(joke.sequence)
      .then((res) => {
        console.log("like joke", res);
      })
      .catch((err) => console.log(err));
    getNextJoke();
  };

  const dislikeJoke = () => {
    ApiService.dislikeJoke(joke.sequence)
      .then((res) => {
        console.log("dislike joke", res);
      })
      .catch((err) => console.log(err));
    getNextJoke();
  };

  return (
    <div className="container">
      <div className="headerWrapper">
        <img src={logo} className="logo" alt="logo" />
        <div className="infoWrapper">
          <div className="info">
            <div className="title">Handicrafted by</div>
            <div className="name">Jim HLS</div>
          </div>
          <img src={sunflower} className="avatar" alt="sunflower" />
        </div>
      </div>
      <div className="headingWrapper">
        <h2 className="heading1">A joke a day keeps doctor away</h2>
        <h5 className="heading2">
          If you joke wrong away, your teeth have to pay. (Serious)
        </h5>
      </div>
      <div className="jokeWrapper">
        <p className="jokeContent">
          {joke.content ? joke.content : joke.messageEnd}
        </p>

        {joke.messageEnd ? (
          <></>
        ) : (
          <div className="btnWrapper">
            <button
              className="btn btnLike"
              onClick={() => {
                likeJoke();
              }}
            >
              This is Funny!
            </button>
            <button className="btn btnDislike" onClick={() => dislikeJoke()}>
              This is not funny.
            </button>
          </div>
        )}
      </div>
      <div className="footer">
        <p className="footerText">
          This website is created as part of HLsolutions program. the materials
          contained on this website are provided for general
          <br />
          information only and do not constitute any from of advice. HLS assumes
          no responsibility for the accuracy of any particular statement and
          <br />
          accept no liability for any loss damage which may arise from reliance
          on the information contained on this website
        </p>
        <div className="copyright">Copyright 2021 HLS</div>
      </div>
    </div>
  );
}

export default App;
