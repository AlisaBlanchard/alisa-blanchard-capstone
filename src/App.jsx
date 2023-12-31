import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/global.scss';
import Home from './pages/home/home';
import UserDashboard from './components/userDashboard/userDashboard';
import HeaderNav from './components/headerNav/headerNav';
import Footer from './components/footer/footer';
import UserProfile from './pages/userProfile/userProfile';
import Shop from './pages/shop/shop';
import About from './pages/about/about';
import Tracker from './pages/tracker/tracker';
import TrackerTemplateBuilder from './components/trackerTemplateBuilder/trackerTemplateBuilder';
import SingleShopItem from './components/singleShopItem/singleShopItem';
import Article from './components/article/article';
// import LogIn from './components/logIn/logIn';
// import LogOut from './components/logOut/logOut';
import React, { useEffect, useState } from 'react';
// import { gapi } from 'gapi-script';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
// axios.defaults.withcredntials = true;


function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    //Fetch user information from the backend
    axios
      .get('http://localhost:5050/user', { withCredentials: true})

      .then((res) => {
          setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
      <HeaderNav 
        user={user} setUser={setUser}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* User Dashboard */}
          <Route path='/:userId' element={<UserDashboard />} />
          <Route path='/article/:articleId' element={<Article />} />

          {/* User Profile */}
          <Route path='/profile/:userId' element={<UserProfile />} />
          <Route path='/profile/:userId/:trackerId' element={<UserProfile />} />


          {/* Shop Routes */}
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:itemId' element={<SingleShopItem />} />

          {/* About */}
          <Route path='/about' element={<About />} />

          {/* Tracker Routes */}
          <Route path='/:userId/tracker' element={<Tracker />} />
          <Route path='/:userId/tracker/:trackerId' element={<Tracker />} />
          <Route path='/:userId/tracker/build' element={<TrackerTemplateBuilder />} />
        </Routes>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
