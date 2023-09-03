import { Link } from 'react-router-dom';
import '../footer/footer.scss';


//Footer Component

function Footer() {
    return(
        <section className="footer">
            <div className="newsletter__wrap">
                <h2>Wanna stay in touch?</h2>
                <p>Subscribe to our newsletter to keep up to date with new features and merch as they drop</p>
                <form className="input__wrap">
                    <input type="text" className='email__input' placeholder='Email'/>
                    <button type='submit'>Subscribe</button>
                </form>
            </div>

            <div className="social__wrap">
                <h3>Stay Connected</h3>
                <div className="icon__wrap">
                    <img src="#" alt="Social Icon" />
                    <img src="#" alt="Social Icon" />
                    <img src="#" alt="Social Icon" />
                </div>
            </div>

            {/* OnClick of the plus icon, these menus open out into information and links */}
            <div className="menu__wrap"> 
                <div className="ourStory__wrap">
                    <div className="title__wrap">
                        <h2>Our Story</h2>
                        <img src="#" alt="Plus Icon" />
                    </div>

                    <div className='mission__cta'>
                        <p>Brief Version of the mission statement</p>
                        <Link to='/about'>Learn More</Link>
                    </div>
                    
                </div>
                <div className="support__wrap">
                    <div className="title__wrap">
                        <h2>Customer Support</h2>
                        <img src="#" alt="Plus Icon" />
                    </div>

                    <div className='support__links'>
                        <Link to='/about'>Accessibility</Link>
                        <Link to='/about'>Privacy Policy</Link>
                        <Link to='/about'>Terms of Service</Link>
                        <Link to='/about'>Contact Us</Link>

                    </div>
                </div>
            </div>

            <h4>TM Trademark/copyright text all rights reserved</h4>

        </section>
    )
}

export default Footer;