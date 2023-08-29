import axios from 'axios';
import '../userProfile/userProfile.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//UserProfile Page

function UserProfile() {
    //State
    const [details, setDetails] = useState({});
    // console.log(details);

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
                <div className="data__visualizer">CHARTS</div>
            </div>
        </section>
    )
}

export default UserProfile;