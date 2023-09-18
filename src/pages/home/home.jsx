import '../home/home.scss';
import hero from '../../assets/Images/heroImages/Hero Image.jpg';
import happyPeople from '../../assets/Images/happyPeople.jpg';
import shopNow from '../../assets/Images/heroImages/rachel-mcdermott-mTJ0-5tMs6A-unsplash.jpg';
import { Link } from 'react-router-dom';
import dataVis from '../../assets/Images/dataVis.jpg';


//Home Page Component

function Home() {
    return(
        <section className='home'>
            <div className="hero__wrap">
                <img src={hero} alt="Hero Image" className="hero__image" />
                <div className="hero__text--wrap">
                    <h1>LifeTracker</h1>
                    <h2>Start Your Journey to a Better Life Today!
                    Track, Customize, Transform – Your Path to Success Begins Here.</h2>
                </div>
            </div>

            <h3>Life Tracker is not just another app - it's your personalized compass to success. Our unique customization features ensure that your data is as unique as your journey, empowering you with precision insights to make informed decisions and unlock your true potential.</h3>

            <div className="ctaBox__wrap">
                <img src={happyPeople} alt="Image" className="cta__img" />
                <div className="ctaBox">
                    <p>Big Problem and not sure where to start?</p>
                    <h2>LifeTracker can help</h2>
                    <p>Many individuals struggle to see the tangible impact of their daily habits and routines on their long-term goals. Life Tracker helps by providing clear, data-driven insights, allowing users to understand how their choices are affecting their progress and make meaningful adjustments for a more successful life.</p>
                    <div className='button'>SIGN UP</div>
                </div>
            </div>

            <Link to='/shop'>
                <div className="shop__cta">
                    <img src={shopNow} alt="Shop Image" />
                    <h2>SHOP NEW MERCH NOW</h2>
                </div>
            </Link>

            <div className="data__prev">
                <div className="text__wrap">
                    <h2>Discover the Power of Visualization </h2>
                    <p>Our data visualization feature transforms your tracking data into clear, engaging visuals. With intuitive charts and graphs, you'll effortlessly grasp patterns, trends, and progress over time. See your life's story unfold in a way that's not just informative but also inspiring, helping you stay motivated and make informed decisions on your journey to self-improvement</p>
                </div>
                <img src={dataVis} alt="Data Visualization preview image" />
            </div>


        </section>
    )
}

export default Home;