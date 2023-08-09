import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='' element='' />
          <Route path='' element='' />
          <Route path='' element='' />
          <Route path='' element='' />
          <Route path='' element='' />
        </Routes>
    
      </div>
    </BrowserRouter>
  );
}

export default App;
