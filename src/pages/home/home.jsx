import '../home/home.scss';
import hero from '../../assets/Images/heroImages/Hero Image.jpg';

//Home Page Component

function Home() {
    return(
        <section className='home'>
            <div className="hero__wrap">
                <img src={hero} alt="Hero Image" className="hero__image" />
                <div className="hero__text--wrap">
                    <h1>LifeTracker</h1>
                    <h2>Meaningful quote that doubles as a call to action for the user</h2>
                </div>
            </div>

            <h3>Text Describing LifeTracker product and why it's important and unique</h3>

            <div className="ctaBox__wrap">
                <img src="#" alt="Image" className="cta__img" />
                <div className="ctaBox">
                    <p>Problem description?</p>
                    <h2>Call to Action Box</h2>
                    <p>Quip about how our solution will fix your problems</p>
                    <button>SIGN UP</button>
                </div>
            </div>

            <div className="scrolling__banner"> Scrolling Banner</div>

            <div className="subscription__wrap">
                {/* ADD  SUBSCRIPTION CARD COMPONENT */}
                <div className="subscription__card">Subscription Card</div>
            </div>

            <div className="media__wrap">
                <p>As Seen in</p>
                <div className="media__banner">BUSINESS BUSINESS BUSINESS BUSINESS BUSINESS BUSINESS </div>
            </div>

            <div className="shop__cta">
                <img src="#" alt="Shop Image" />
                <h2>Shopping Call to action blurb</h2>
            </div>

            <div className="data__prev">
                <h2>Data visualization description blurb</h2>
                <img src="#" alt="Data Visualization preview image" />
            </div>


        </section>
    )
}

export default Home;