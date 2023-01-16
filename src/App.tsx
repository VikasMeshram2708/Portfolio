import Carosuel from './Components/Carosuel';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Carosuel />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/education' element={<Education />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
