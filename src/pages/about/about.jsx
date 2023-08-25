import '../about/about.scss';

//About Page 

function About() {
    return(
        <section className="about">
            <div className="hero">
                <h1>About Us</h1>
                <h2>Meaningful quote that relates to the company and their goals</h2>
            </div>

            <article className="mission__statement">
                <p>At LifeTracker, we're dedicated to enhancing lives through personalized data. 
                    <br />Our Life Tracking app empowers you with customizable tools, ensuring accurate insights for informed decisions. 
                    <br />By tailoring your tracking experience, you'll draw conclusions that drive real improvements. 
                    <br />We're your partner in this journey, helping you transform data into a better life.</p>
                <img src="#" alt="Mission Statement Image" />
            </article>

            <div className="feedback__cta"> Provide Feedback by clicking here!</div>

        </section>
    )
}

export default About;