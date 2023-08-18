import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/home/home';
import UserDashboard from './components/userDashboard/userDashboard';
import HeaderNav from './components/headerNav/headerNav';
import UserProfile from './pages/userProfile/userProfile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <HeaderNav />
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          {/* User Dashboard */}
          <Route path='/' element={<UserDashboard />} />
          {/* User Profile */}
          <Route path='/profile/:userId' element={<UserProfile />} />
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
