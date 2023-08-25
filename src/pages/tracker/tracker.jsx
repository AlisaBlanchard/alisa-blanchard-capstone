import '../tracker/tracker.scss';
import TrackerForm from '../../components/trackerForm/trackerForm';

//Tracker Page

function Tracker() {
    return(
        <section className="tracker">
            <div className="title__wrap">
                <h1>Tracker</h1>
                <p>Brief instruction/description of tracker</p>
            </div>

            <div className="tracker__wrap">
                <div className="tracker__dropdown">Tracker Selection Dropdown</div>
                    
                <TrackerForm />
            </div>
        </section>
    )
}

export default Tracker;