import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/home/home';
import UserDashboard from './components/userDashboard/userDashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<UserDashboard />} />
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
