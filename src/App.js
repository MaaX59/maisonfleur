import logo from "./logo.svg";
import "./App.css";
import {
  Navbar,
  About,
  Contact,
  Gallery,
  Header,
  Services,
  Review,
} from "./containers/index";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Services />
      <Gallery />
      <Review />
      {/* <About /> */}
      <Contact />
    </div>
  );
}

export default App;
