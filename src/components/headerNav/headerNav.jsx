import '../headerNav/headerNav.scss';
import logo from '../../assets/logo/Logo2.png';

// Headernav Component

function HeaderNav() {

    //Need a logged in version and logged out version
    return (
        <nav>
            <img src={logo} alt="Logo" className='logo' />
            <ul className='header_nav'>
                <li>SHOP</li>
                <li>LOG OUT</li>
            </ul>

        </nav>
    )
}

export default HeaderNav;