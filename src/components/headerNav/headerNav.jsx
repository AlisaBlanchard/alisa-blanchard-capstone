import "../headerNav/headerNav.scss";
import logo from "../../assets/logo/Logo2.png";
import { Link, NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import LogInForm from "../logInForm/logInForm";

// Headernav Component

function HeaderNav() {
  //Need a logged in version and logged out version
    //State
    const [logInVisibility, setLogInVisibility] = useState(false);
    const [style, setStyle] = useState(false);

    const {userId} = useParams();

    const visibilityHandler = () => {
        setLogInVisibility(!logInVisibility);
        setStyle(!style);
    }

  return (
    <nav>
       <div className={style && 'login__background'}></div> 
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <ul className="header_nav">
        <li>
          <NavLink to="/">SHOP</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={visibilityHandler}>LOG {userId ? 'OUT' : 'IN'}</NavLink>
        </li>
      </ul>
      {logInVisibility &&
        <LogInForm 
          visibilityHandler={visibilityHandler}
        />
      }
    </nav>
  );
}

export default HeaderNav;
