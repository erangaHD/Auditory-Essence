import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Pricing/>      
    </div>
  );
}

export default App;
