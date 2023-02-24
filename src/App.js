import React, { useState } from "react";
import "./App.css";

<link rel="stylesheet" href="App.css" />;

let profile = {
  name: "Moscow",
  paragraph: "Moscow is a fucking strong MM",
  img: "https://th.bing.com/th/id/R.98a26d6ac1e04f355f51fb927dc55d63?rik=7Pbbzc%2fjf%2fPYFQ&pid=ImgRaw&r=0",
  liked: false,
  video: "https://www.youtube.com/embed/8Vifsk6xMaE",
};
let profile2 = {
  name: "Ankela",
  paragraph: "Ankela is a healer support hero",
  img: "https://th.bing.com/th/id/R.1fb3b112712fd4de13ed31b388032dd7?rik=HvgIX7GLHR%2f%2fJA&pid=ImgRaw&r=0",
  liked: false,
  video: "https://www.youtube.com/embed/TqYKjzPGtVw",
};
let profile3 = {
  name: "Yi Sun Shin",
  paragraph: "YSS is one of the best junglers but saddly he is nerfed",
  img: "https://i.ytimg.com/vi/5bMBa31wWpM/hqdefault.jpg",
  liked: false,
  video: "https://www.youtube.com/embed/eFm7USDliTE",
};
const database = [profile, profile2, profile3];

function Profile({ hero, state, setState }) {
  const { name, paragraph, img, video } = hero;

  const [like, setLike] = useState(hero.liked);
  console.log(like);
  function likeD() {
    if (like === false) {
      setLike(true);
      hero.liked = true;
      console.log(hero.name, "liked status :", hero.liked);
    } else {
      setLike(false);
      hero.liked = false;
      console.log(hero.name, "liked status :", hero.liked);
    }
  }
  function nextpage() {
    if (state !== database.length - 1) {
      setState(state + 1);
      setLike(database[state + 1].liked);
    }
    if (state === database.length - 1) {
      setState(0);
      setLike(database[0].liked);
    }
  }

  const style = {
    width: "200px",
    height: "auto",
    color: "white",
    ShadowRoot: "black",
    margin: "10px",
    pending: "400px",
  };
  console.log(hero);
  return (
    <center>
      <div
        class="main"
        className="App"
        style={{
          backgroundImage: `url("ankela.jpg")`,
          width: "auto",
          height: "800px",
        }}
      >
        <div class="main">
          <div>
            <h1 style={style}>{name}</h1>
            <h2 class="h2">One pic from hero:</h2>
            <img class="img1" src={img}></img>
            <iframe src={video}> title ="video" </iframe>
            <center class="Like">
              <button
                onClick={() => {
                  likeD();
                }}
              >
                {like ? "dislike" : "like"}
              </button>
            </center>
            <p style={style}>{paragraph}</p>
            <button
              onClick={() => {
                nextpage();
              }}
            >
              Next
            </button>

            <br />
          </div>
        </div>
      </div>
    </center>
  );
}

function App() {
  const initialState = 0;

  const [state, setState] = useState(initialState);
  return (
    <Profile hero={database[state]} state={state} setState={setState}></Profile>
  );
}

export default App;
