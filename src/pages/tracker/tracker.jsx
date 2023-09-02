import '../tracker/tracker.scss';
import TrackerForm from '../../components/trackerForm/trackerForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

//Tracker Page

function Tracker() {
    //State
    const [trackers, setTrackers] = useState([]);
    const [userTrackers, setUserTrackers] = useState([]);
    

    const {userId} = useParams();
    // console.log(trackers);

    //GET to get all trackers by specific user for dropdown selection
    useEffect(() => {
        const URL = "http://localhost:5050";

        axios
        .get(`${URL}/trackers`)

        .then((res) => {
            const users = res.data;

            const userData = users.filter((user) => user.userId == userId);

            setUserTrackers(userData);

            //Using the userData array, pull out the names of all available trackers for use in dropdown
            const userTrackers = [];

            userData.forEach((tracker) => {
                const trackerObj = tracker;
                if (!userTrackers.includes(trackerObj)) {
                    userTrackers.push(trackerObj);
                }
            });

            console.log(userTrackers);
            
            //Setting state
            setTrackers(userTrackers);

        });
    }, []);

    const trackerChangeHandler = (e) => {
        console.log(e);
    }


    return(
        <section className="tracker">
            <div className="title__wrap">
                <h1>Tracker</h1>
                <p>Brief instruction/description of tracker</p>
            </div>

            <div className="tracker__wrap">
                <select name='tracker__dropdown' id='tracker__dropdown' onChange={trackerChangeHandler}>
                    <option value='tracker default'>Pick Your Tracker</option>
                {trackers.map((tracker) => {
                    return(
                        <option value={tracker.tracker_name} key={tracker.trackerId}>{tracker.tracker_name}</option>
                    )
                })}
                </select>
                {/* Use Find method to find specific tracker selected in dropdown
                 by trackerId to generate the appropriate tracker form below */}

                {/* {userTrackers.find((tracker) => {
                    tracker.trackerId == trackerId
                })} */}
                
                <TrackerForm 
                    userTrackers={userTrackers}
                />
            </div>
        </section>
    )
}

export default Tracker;