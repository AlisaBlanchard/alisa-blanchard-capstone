import '../headerNav/headerNav.scss';
import logo from '../../assets/logo/Logo2.png';
import { Link, NavLink } from 'react-router-dom';

// Headernav Component

function HeaderNav() {

    //Need a logged in version and logged out version
    return (
        <nav>
            <Link to="/" >
            <img src={logo} alt="Logo" className='logo' />
            </Link>

            <ul className='header_nav'>
                
                <li>
                    <NavLink 
                        exact to="/"
                    >
                        SHOP
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact to="/"
                    >
                    LOG OUT
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default HeaderNav;