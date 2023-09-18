import axios from 'axios';
import '../userProfile/userProfile.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthHoc from '../../components/AuthHoc/AuthHoc';
import BarChart from '../../components/barChart/barChart';
import { Link, useNavigate} from 'react-router-dom';


//UserProfile Page

function UserProfile() {
    const navigate = useNavigate();
    const { userId, trackerId } = useParams();

    //State
    const [details, setDetails] = useState({});
    const [userTrackers, setUserTrackers] = useState([]);
    const [trackerID, setTrackerID] = useState(trackerId);


    //GET to retrieve Users array
    useEffect(() => {
        const URL = "http://localhost:5050";

        axios
        .get(`${URL}/users`)

        .then((res) => {
            const users = res.data.users;

            const foundUser = users.find((user) => user.userId == userId);
            
            setDetails(foundUser);
        });
        
        axios
        .get(`${URL}/trackers`)

        .then((res) => {
            const trackers = res.data.Trackers;

            const trackerData = trackers.filter((tracker) => tracker.userId == userId);
 
            setUserTrackers(trackerData);
        });
    }, []);

    //Dropdown Changehandler
    const trackerChangeHandler = (e) => {
        const selectedTracker = (e.target.options[e.target.selectedIndex].id);
        
        setTrackerID(selectedTracker);

        navigate(`/profile/${userId}/${selectedTracker}`);
    };



    return (
        <section className="userProfile">
            <div className="user__wrap">
            <h1>{details.username}</h1>
                <div className="user__info--wrap">
                    <div className="user__info">
                        <p>{details.firstName} {details.lastName}</p>
                    </div>
                </div>
            </div>
            <div className="data__wrap">
                <div className="action__wrap">
                    <div className="tracker__dropdown">
                        <select name="tracker__dropdown" id="tracker__dropdown" onChange={trackerChangeHandler}>
                            {userTrackers.map((tracker) => {
                                return(
                                    <option value={tracker.tracker_name} id={tracker.trackerId} key={tracker.trackerId}>{tracker.tracker_name}</option>
                                )
                            })}

                        </select>
                    </div>
                </div>
                {trackerID ? (
                    <div className="data__visualizer">
                        <div className="chart">
                            <BarChart 
                                userTrackers={userTrackers}
                            />
                        </div>
                    </div>
                 ) : (
                    <div>
                        <h2>Choose a Tracker to Get Started</h2>
                    </div>
                )}
            </div>
        </section>
    )
}

export default UserProfile;