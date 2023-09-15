import axios from 'axios';
import '../userProfile/userProfile.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthHoc from '../../components/AuthHoc/AuthHoc';

//UserProfile Page

function UserProfile() {
    //State
    const [details, setDetails] = useState({});
    const [trackerDetails, setTrackerDetails] = useState([]);
    const [tracker, setTracker] = useState({});

    
    // console.log(JSON.stringify(details.profPic));

    const { userId } = useParams();

    //GET to retrieve Users array
    useEffect(() => {
        const URL = "http://localhost:5050";

        axios
        .get(`${URL}/users`)

        .then((res) => {
            const users = res.data.users;
            // console.log(res.data);

            const foundUser = users.find((user) => user.userId == userId);
            
            setDetails(foundUser);
        });
    }, []);

    //GET to retrieve all of the user's trackers by userId
    useEffect(() => {
        const URL = "http://localhost:5050";

        axios
        .get(`${URL}/trackers`)

        .then((res) => {
            const trackers = res.data.Trackers;

            const foundTrackers = trackers.filter((user) => user.userId == userId);

            const userTrackers = [];

            foundTrackers.forEach((tracker) => {
                const trackerObj = tracker;
                if (!userTrackers.includes(trackerObj)) {
                    userTrackers.push(trackerObj);
                }
            });

            // console.log(userTrackers);

            setTrackerDetails(userTrackers);
        });
    }, []);

    //Changehandler for dropdown menu
    const trackerChangeHandler = (e) => {
        console.log(e.target);
    }

    // console.log(details);


    return (
        <section className="userProfile">
            <div className="user__wrap">
            <h1>{details.username}</h1>
                <div className="user__info--wrap">
                    <img src={details.profPic} alt="Profile Picture" className='user__img' />
                    <div className="user__info">
                        <p>Name: {details.firstName} {details.lastName}</p>
                        {/* <p>Sessions: {details.tracking_sessions}</p> */}
                    </div>
                </div>
            </div>
            <div className="data__wrap">
                <div className="action__wrap">
                    <div className="tracker__dropdown">
                        <select name="tracker__dropdown" id="tracker__dropdown" onChange={trackerChangeHandler}>
                            {trackerDetails.map((tracker) => {
                                return(
                                    <option value={tracker.tracker_name} key={tracker.trackerId}>{tracker.tracker_name}</option>
                                )
                            })}

                        </select>
                    </div>
                    <div className="data__button">See My Data</div>
                </div>
                <div className="data__visualizer">CHARTS</div>
            </div>
        </section>
    )
}

export default UserProfile;