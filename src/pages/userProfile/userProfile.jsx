import axios from 'axios';
import '../userProfile/userProfile.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthHoc from '../../components/AuthHoc/AuthHoc';
import BarChart from '../../components/barChart/barChart';

//UserProfile Page

function UserProfile() {
    //State
    const [details, setDetails] = useState({});
    const [userTrackers, setUserTrackers] = useState([]);
    
    // console.log(details);
    // console.log(userTrackers);


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
        
        axios
        .get(`${URL}/trackers`)

        .then((res) => {
            const trackers = res.data.Trackers;
            // console.log(trackers);

            const trackerData = trackers.filter((tracker) => tracker.userId == userId);
            // setUserTrackers(trackerData);

            //Using the trackerData array, pull out the names of all available trackers for use in dropdown
            const trackerNames = [];

            trackerData.forEach((tracker) => {
                const trackerObj = tracker;
                if (!trackerNames.includes(trackerObj)) {
                    trackerNames.push(trackerObj);
                }
            });
            setUserTrackers(trackerNames);
        });

            
    }, []);

    // console.log(details);

    //Dropdown CHangehandler
    const trackerChangeHandler = (e) => {
        console.log(e);


    };



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
                            {userTrackers.map((tracker) => {
                                return(
                                    <option value={tracker.tracker_name} key={tracker.trackerId}>{tracker.tracker_name}</option>
                                )
                            })}

                        </select>
                    </div>
                    <div className="data__button">See My Data</div>
                </div>
                <div className="data__visualizer">
                    <BarChart 
                        userTrackers={userTrackers}
                    />
                </div>
            </div>
        </section>
    )
}

export default UserProfile;