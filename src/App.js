import React, { useState } from "react";
import "./App.css";

<link rel="stylesheet" href="App.css" />;
let profile = {
  name: "Moscow",
  paragraph: "Moscow is a fucking strong MM",
  img: "https://th.bing.com/th/id/R.98a26d6ac1e04f355f51fb927dc55d63?rik=7Pbbzc%2fjf%2fPYFQ&pid=ImgRaw&r=0",
  liked: false,
};
let profile2 = {
  name: "Ankela",
  paragraph: "Ankela is a healer support hero",
  img: "https://th.bing.com/th/id/R.1fb3b112712fd4de13ed31b388032dd7?rik=HvgIX7GLHR%2f%2fJA&pid=ImgRaw&r=0",
  liked: false,
};
let profile3 = {
  name: "YSS",
  paragraph: "YSS is one of the best junglers but saddly he is nerfed",
  img: "https://i.ytimg.com/vi/5bMBa31wWpM/hqdefault.jpg",
  liked: false,
};
const database = [profile, profile2, profile3];
function App() {
  const initialState = 0;

  const [state, setState] = useState(initialState);
  const likeInitial = "like";

  const [like, setLike] = useState(likeInitial);
  const { name, paragraph, img } = database[state];
  const style = {
    width: "200px",
    height: "auto",
    color: "white",
    ShadowRoot: "black",
    margin: "20px",
    pending: "400px",
    animation: "spin infinite 20s linear",
  };
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
            <img style={style} src={img}></img>
            <center class="Like">
              <button
                onClick={() => {
                  if (database[state].liked === false) {
                    setLike("dislike");
                    database[state].liked = true;
                    console.log(
                      database[state].name,
                      "liked status :",
                      database[state].liked
                    );
                  } else if (database[state].liked === true) {
                    setLike("like");
                    database[state].liked = false;
                    console.log(
                      database[state].name,
                      "liked status :",
                      database[state].liked
                    );
                  }
                }}
              >
                {like}
              </button>
            </center>
            <p style={style}>{paragraph}</p>

            <button
              onClick={() => {
                if (state !== database.length - 1) {
                  setState(state + 1);
                  like = database[state].liked;
                }
                if (state === database.length - 1) setState(0);
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

export default App;
