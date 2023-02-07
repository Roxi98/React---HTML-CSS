import logo from "./logo.svg";
import "./App.css";
import { hasPointerEvents } from "@testing-library/user-event/dist/utils";
const profile = {
  name: "Krisztian",
  paragraph: "Ird be ide az emailod:",
  img: "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/312903381_5615588235174896_3837931749842999114_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NVcqR-AypWwAX_d3-cX&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfBuA-eZyjofZ9nthz9zN7I9Y2VJat6UGO90HLcfv1Jx8A&oe=63E74475",
};
const profile2 = {
  name: "Timi",
  paragraph: "Hia,Timi vagyok es kerek a popom!",
  img: "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/278181807_2128158277352067_5773093625486859555_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=-Il9P7LWJ40AX8raC1L&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfDke_fQ8ywh6NeUJEMYMagVv3QiANBzKs29i8ZqlgI6xA&oe=63E82995",
};
const database = [profile, profile2];
const { name, paragraph, img } = database[0];

function App() {
  const style = {
    width: "200px",
    height: "auto",
  };
  return (
    <div className="App">
      <h1>{name}</h1>

      <h2>Egy kep rolam :</h2>
      <img style={style} src={img}></img>
      <p>{paragraph}</p>
      <input type={"email"}></input>
      <br />
      <button>kuldes</button>
    </div>
  );
}

export default App;
