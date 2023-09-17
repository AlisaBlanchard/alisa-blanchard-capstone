import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
//   Legend,
} from "chart.js";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

//Bar Chart Component

function BarChart({ userTrackers }) {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip );

  const { userId, trackerId } = useParams();

  //State
  const [trackerData, setTrackerData] = useState({});

  // console.log(trackerId);

  // console.log(trackerData);

  const testData = [
    {
      data: [
        {
          label: "Time Meditated",
          method: "Number",
          value: 30,
        },
        {
          label: "Mood",
          method: "RangeRadio",
          value: 4,
        },
        {
          label: "Breakdowns",
          method: "Number",
          value: 1,
        },
        {
          label: "Exercised",
          method: "BooleanRadio",
          value: true,
        },
      ],
    },
    {
      data: [
        {
          label: "Time Meditated",
          method: "Number",
          value: 14,
        },
        {
          label: "Mood",
          method: "RangeRadio",
          value: 3,
        },
        {
          label: "Breakdowns",
          method: "Number",
          value: 2,
        },
        {
          label: "Exercised",
          method: "BooleanRadio",
          value: true,
        },
      ],
    },
    {
      data: [
        {
          label: "Time Meditated",
          method: "Number",
          value: 0,
        },
        {
          label: "Mood",
          method: "RangeRadio",
          value: 3,
        },
        {
          label: "Breakdowns",
          method: "Number",
          value: 3,
        },
        {
          label: "Exercised",
          method: "BooleanRadio",
          value: false,
        },
      ],
    },
  ];

  const test = testData.map((obj) => obj.data);
  console.log(test);

  const final = test.map((obj) => obj.label);
  console.log(final);

//   const labels = [];

//   test.forEach((obj) => {
//       const label = obj.value;

//       if (!labels.includes(label)) {
//         labels.push(label);
//       }
//     });

//     console.log(labels);


  //GET to retrieve Sessions data
  useEffect(() => {
    const URL = "http://localhost:5050";

    axios
      .get(`${URL}/sessions/${userId}/${trackerId}`)

      .then((res) => {
        const sessions = res.data.sessions;
        // console.log(res.data);
        // console.log(sessions);

        const test = sessions.map((obj) => obj.data);
        // console.log(test);

        const labels = [];

        test.forEach((obj) => {
            const label = obj.label;

            if (!labels.includes(label)) {
              labels.push(label);
            }
          });

        //   console.log(labels);

        // const foundUser = sessions.find((user) => user.userId == userId);

        setTrackerData(sessions);
      });
  }, []);

  //Chart Data
//   const data = {
//     labels: [testData],
//     datasets: [
//       {
//         label: '',
//         data: [testData.map((obj) => obj.data)],
//         backgroundColor: "seagreen",
//         borderColor: "black",
//         borderWidth: 1,
//       },
//     ],
//   };


//Think I need to create an array per labelField (Time Meditated OR Mood OR Breakdown etc)
// Fill it using a forEach to run through the data and pull out the values
// then reference those arrays dynamically in Data field below

const data = {
    labels: ['Time Meditated', 'Mood', 'Breakdown', 'Exercise'],
    datasets: [
      {
        label: '',
        data: [30, 14, 1, 1],
        backgroundColor: "seagreen",
        borderColor: "black",
        borderWidth: 1,
      },

    ],
  };


//   console.log(data);

  const options = {};

  return (
    // <Bar />
    <div>
      <Bar data={data} options={options}></Bar>
    </div>
  );
}

export default BarChart;
