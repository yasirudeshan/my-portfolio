import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import Contactme from './components/Contactme';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Blogs />
      <Contactme />
      
    </div>
  );
}

export default App;
