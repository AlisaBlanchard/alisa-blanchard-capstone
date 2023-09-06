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
    const [chartData, setChartData] = useState({
        labels: userTrackers.map((obj) => obj.label),
        datasets: [{
            label:userTrackers.map((obj) => obj.label),
            data: userTrackers.map((obj) => obj.value),

        }]
    });
    console.log(chartData);

    const { userId } = useParams();

    //GET to retrieve Users array
    useEffect(() => {
        const URL = "http://localhost:5050";

        axios
        .get(`${URL}/users`)

        .then((res) => {
            const users = res.data;
            // console.log(res.data);

            const foundUser = users.find((user) => user.userId == userId);
            
            setDetails(foundUser);
        });
    }, []);

    //GET to retrieve trackers array
    useEffect(() => {
        const URL = "http://localhost:5050";

        axios
        .get(`${URL}/trackers`)

        .then((res) => {
            const users = res.data;
            // console.log(res.data);

            //Find Specific user's tracker data by userId
            const foundUser = users.find((user) => user.userId == userId);

            //Map over foundUser tracker data and make a new array holding the Session Data array
            const trackerData = foundUser.sessions.map((session) => session.data);

            // console.log(trackerData);
            setUserTrackers(trackerData);
        });
    }, []);


    // console.log(details);


    return (
        <section className="userProfile">
            <div className="user__wrap">
            <h1>{details.username}</h1>
                <div className="user__info--wrap">
                    <div src="#" alt="Profile Picture" className='user__img' />
                    <div className="user__info">
                        <p>Name: {details.name}</p>
                        <p>Birthday: {details.birthdate}</p>
                        <p>Sessions: {details.tracking_sessions}</p>
                    </div>
                </div>
            </div>
            <div className="data__wrap">
                <div className="action__wrap">
                    <div className="tracker__dropdown">Tracker Dropdown</div>
                    <div className="data__button">See My Data</div>
                </div>
                <div className="data__visualizer"><BarChart /></div>
            </div>
        </section>
    )
}

export default UserProfile;