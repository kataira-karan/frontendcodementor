import Nav from "./Componenets/Nav/Nav";
import "./App.css";
import Banner from "./Componenets/Banner/Banner";
import Home from "./Componenets/Home/Home";
import Section2 from "./Componenets/Section2/Section2";
import Footer from "./Componenets/Footer/Footer";
import Section3 from "./Componenets/Section3/Section3";

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Home></Home>
      <Section2></Section2>
      <Section3></Section3>
      <Footer></Footer>
    </div>
  );
}

export default App;
