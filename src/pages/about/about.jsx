import '../about/about.scss';
import aboutHero from '../../assets/Images/heroImages/ray-hennessy-fWBCq0DTwAI-unsplash.jpg';

//About Page 

function About() {
    return(
        <section className="about">
            <div className="hero">
                <img src={aboutHero} alt="Hero Image" />
                <div className="hero__text">
                    <h1>About Us</h1>
                </div>
            </div>

            <article className="mission__statement">
                <p>At LifeTracker, we're dedicated to enhancing lives through personalized data. 
                    <br />Our Life Tracking app empowers you with customizable tools, ensuring accurate insights for informed decisions. 
                    <br />By tailoring your tracking experience, you'll draw conclusions that drive real improvements. 
                    <br />We're your partner in this journey, helping you transform data into a better life.</p>
            </article>
        </section>
    )
}

export default About;