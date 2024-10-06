import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Wrapper>
    <Router>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </Wrapper>
    
  );
}

export default App;
