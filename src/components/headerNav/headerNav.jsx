import "../headerNav/headerNav.scss";
import logo from "../../assets/logo/Logo2.png";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import LogInForm from "../logInForm/logInForm";
import axios from "axios";


// Headernav Component

function HeaderNav({user, setUser}) {
  //Need a logged in version and logged out version
    //State
    const [logInVisibility, setLogInVisibility] = useState(false);
    const [style, setStyle] = useState(false);

    const {userId} = useParams();
    const navigate =useNavigate();

    const visibilityHandler = () => {
        setLogInVisibility(!logInVisibility);
        setStyle(!style);
    }

    const handleLogout = () => {
      // Log out the user on the backend.
      axios
        .get('http://localhost:5050/logout', { withCredentials: true })
        .then((data) => {
          setUser(null);
          if (data.redirect) {
            navigate("/")
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

  return (
    <nav>
       <div className={style && 'login__background'}></div> 
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <ul className="header_nav">
        <li>
          <NavLink to="/shop">SHOP</NavLink>
        </li>
        <li>
          {user ? (
              <div className="user__wrap">
                <p className="welcome">Welcome, {user.displayName}</p>
                <button onClick={handleLogout}>LOG OUT</button>
              </div>

            ) : (
              <a href="http://localhost:5050/auth/google">LOG IN</a>
            )}
        </li>

      </ul>
      {logInVisibility &&
        <LogInForm 
          visibilityHandler={visibilityHandler}
          handleLogout={handleLogout}
          user={user}
          setUser={setUser}
        />
      }
    </nav>
  );
}

export default HeaderNav;
