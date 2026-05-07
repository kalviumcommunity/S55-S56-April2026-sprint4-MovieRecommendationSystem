import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="w-full min-h-screen bg-netflix-dark text-netflix-light overflow-x-hidden font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Future routes can be added here */}
      </Routes>
    </div>
  );
}

export default App;
