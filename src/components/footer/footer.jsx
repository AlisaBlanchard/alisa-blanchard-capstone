import { Link } from "react-router-dom";
import "../footer/footer.scss";
import facebook from "../../assets/icons/Social/facebook.svg";
import instagram from "../../assets/icons/Social/instagram.svg";
import linkedin from "../../assets/icons/Social/linkedin.svg";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";
import { useState } from "react";

//Footer Component

function Footer() {
  //State
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [icon, setIcon] = useState(menuVisibility);

  //ClickHandler to drop down Menus
  const handleDropdown = () => {
    setMenuVisibility(!menuVisibility);

    const changeIcon = !menuVisibility ? minus : plus;
    setIcon(changeIcon);
  };

  //Newsletter 
  //subscribe button click handler
    //Have logic to make sure it is a valid email 

  return (
    <section className="footer">
      <div className="newsletter__wrap">
        <h2>Wanna stay in touch?</h2>
        <p>
          Subscribe to our newsletter to keep up to date with new features and
          merch as they drop
        </p>
        <form className="input__wrap">
          <input type="text" className="email__input" placeholder="Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="social__wrap">
        <h3>Stay Connected</h3>
        <div className="icon__wrap">
          <a href="https://www.facebook.com">
            <img src={facebook} alt="facebook Icon" />
          </a>
          <a href="https://www.instagram.com">
            <img src={instagram} alt="instagram Icon" />
          </a>
          <a href="https://www.linkedin.com">
            <img src={linkedin} alt="linkedIn Icon" />
          </a>
        </div>
      </div>

      <div className="menu__wrap">
        <div className="ourStory__wrap">
          <div className="title__wrap">
            <h2>Our Story</h2>
            <img src={icon} alt="Expand Icon" onClick={handleDropdown} />
          </div>
          {menuVisibility && (
            <div className="mission__cta">
              <p>Brief Version of the mission statement</p>
              <Link to="/about">Learn More</Link>
            </div>
          )}
        </div>
        <div className="support__wrap">
          <div className="title__wrap">
            <h2>Customer Support</h2>
            <img src={icon} alt="Expand Icon" onClick={handleDropdown} />
          </div>
          {menuVisibility && (
            <div className="support__links">
              <Link to="/about">Accessibility</Link>
              <Link to="/about">Privacy Policy</Link>
              <Link to="/about">Terms of Service</Link>
              <Link to="/about">Contact Us</Link>
            </div>
          )}
        </div>
      </div>

      <h4>TM Trademark/copyright text all rights reserved</h4>
    </section>
  );
}

export default Footer;
