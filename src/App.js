import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";

import { Element } from 'react-scroll';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Element name="home" className="element"><Home/></Element>
      <Element name="about" className="element"><About/></Element>
      <Element name="service" className="element"><Services/></Element>
      <Element name="pricing" className="element"><Pricing/></Element>   
      <Element name="testimonial" className="element"><Testimonial/></Element>
      <Element name="contact" className="element"><Footer/></Element> 
    </div>
  );
}

export default App;
