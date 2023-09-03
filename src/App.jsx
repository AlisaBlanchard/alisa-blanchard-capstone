import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/home/home';
import './styles/global.scss';
import Home from './pages/home/home';
import UserDashboard from './components/userDashboard/userDashboard';
import HeaderNav from './components/headerNav/headerNav';
import Footer from './components/footer/footer';
import UserProfile from './pages/userProfile/userProfile';
import Shop from './pages/shop/shop';
import About from './pages/about/about';
import Tracker from './pages/tracker/tracker';
import SingleShopItem from './components/singleShopItem/singleShopItem';
import LogIn from './components/logIn/logIn';
import LogOut from './components/logOut/logOut';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {

  const clientId = "202998095993-qj92550c2un8c7i5mp399nm73osnmr1e.apps.googleusercontent.com";

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: ""
  //     })
  //   };

  //   gapi.load('client:auth2', start);
  // }, []) 

  return (
    <BrowserRouter>
      <div className="App">
      <HeaderNav />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* User Dashboard */}
          <Route path='/:userId' element={<UserDashboard />} />
          
          {/* User Profile */}
          <Route path='/profile/:userId' element={<UserProfile />} />
          
          {/* Shop Routes */}
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:itemId' element={<SingleShopItem />} />

          {/* About */}
          <Route path='/about' element={<About />} />

          {/* Tracker Routes */}
          <Route path='/tracker/:userId' element={<Tracker />} />
        </Routes>
      <Footer />
    
      </div>
    </BrowserRouter>
  );
}

export default App;
