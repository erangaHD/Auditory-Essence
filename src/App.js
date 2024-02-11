import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Pricing/>   
      <Testimonial/> 
      <Footer/>  
    </div>
  );
}

export default App;
