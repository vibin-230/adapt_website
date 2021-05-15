import "./App.css";
import { Footer } from "./components/footer/Footer";
import { NavBar } from "./components/navBar/NavBar";
import { HomePage } from "./page/homePage/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
