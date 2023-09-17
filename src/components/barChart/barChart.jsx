import {Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

 
//Bar Chart Component



function BarChart({userTrackers}) {

    ChartJS.register(
        BarElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend)

    const {userId, trackerId} = useParams();

    //State
    const [trackerData, setTrackerData] = useState({});

    console.log(trackerId);

    console.log(trackerData);

   //GET to retrieve Sessions data
   useEffect(() => {
    const URL = "http://localhost:5050";

    axios
    .get(`${URL}/sessions/${userId}/${trackerId}`)

    .then((res) => {
        const sessions = res.data.sessions;
        // console.log(sessions);

        // const foundUser = sessions.find((user) => user.userId == userId);
        
        setTrackerData(sessions);
    });
   }, []);



    //Chart Data 
    const data = {
        labels: [],
        datasets: [{
            label: '',
            data: [],
            backgroundColor: 'seagreen',
            borderColor: 'black',
            borderWidth: 1,
        }],

    }

    const options = {

    }

    return(
        // <Bar />
        <div>
            <Bar
                data={data}
                options={options}
            ></Bar>
        </div>
    )
}

export default BarChart;