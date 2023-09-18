import '../tracker/tracker.scss';
import TrackerForm from '../../components/trackerForm/trackerForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link, useNavigate} from 'react-router-dom';

//Tracker Page

function Tracker() {
    const {userId, trackerId} = useParams();

    const navigate = useNavigate();
    //State
    const [trackers, setTrackers] = useState([]);
    const [trackerID, setTrackerID] = useState(trackerId);


    // console.log(trackerID);
    // console.log(userTrackers);


    //GET to get all trackers by specific user for dropdown selection
    useEffect(() => {
        const URL = "http://localhost:5050";

        axios
        .get(`${URL}/trackers`)

        .then((res) => {
            const trackers = res.data.Trackers;

            const trackerData = trackers.filter((tracker) => tracker.userId == userId);
            
            //Setting state
            setTrackers(trackerData);

        });
    }, []);

    const trackerChangeHandler = (e) => {
        const selectedTracker = (e.target.options[e.target.selectedIndex].id);
        
        setTrackerID(selectedTracker);

        navigate(`/${userId}/tracker/${selectedTracker}`);
    }




    return(
        <section className="tracker">
            <div className="title__wrap">
                <h1>Tracker</h1>
                <p>Brief instruction/description of tracker</p>
            </div>

            <div className="tracker__wrap">
                <div className="tracker__cta--wrap">
                    <select name='tracker__dropdown' id='tracker__dropdown' onChange={trackerChangeHandler} >
                        <option value='tracker default'>Pick Your Tracker</option>
                        {trackers.map((tracker) => {
                            // console.log(trackers);
                            return(
                                    <option value={tracker.tracker_name} id={tracker.trackerId} key={tracker.trackerId}>{tracker.tracker_name}</option>
                            )
                        })}
                    </select>
                    <Link to={`/${userId}/tracker/build`}>
                        <div className='new__tracker'>Create New Tracker</div >
                    </Link>
                </div> 
                {trackerID ? ( 
                    <TrackerForm 
                        userId={userId}
                        trackerID={trackerID}
                        setTrackerID={setTrackerID}
                    />
                    ) : (
                        <div>
                        <h2>Choose a Tracker to Get Started</h2>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Tracker;