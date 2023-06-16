import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";

import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Blogs />
      <Footer/>
    </div>



  );
}

export default App;
