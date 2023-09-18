import { useEffect, useState } from "react";
import "../trackerForm/trackerForm.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import sad from "../../assets/icons/frown.svg";
import neutral from "../../assets/icons/meh.svg";
import happy from "../../assets/icons/smile.svg";

//Tracker Form Component

function TrackerForm({ setTrackerID, trackerID }) {
  const { userId, trackerId } = useParams();

  //State
  const [tracker, setTracker] = useState({});
  const [template, setTemplate] = useState([]);

  const trackerName = tracker.tracker_name;

  const [formData, setFormData] = useState({
    trackerName: trackerName,
    userId: userId,
    trackerId: trackerId,
    label: template.map((row) => row.label),
    method: template.map((row) => row.method),
    // label1: "",
    // method1: "",
    // value1: "",
    // label2: "",
    // method2: "",
    // value2: "",
    // label3: "",
    // method3: "",
    // value3: "",
    // label4: "",
    // method4: "",
    // value4: "",
  });

  useEffect(() => {
    setTrackerID(trackerID);
  }, [trackerID]);

  console.log(formData);

  //GET to retrieve tracker info by userId & trackerId
  useEffect(() => {
    const URL = "http://localhost:5050";

    if (trackerId !== undefined) {
      axios
        .get(`${URL}/trackers/${userId}/${trackerID}`)

        .then((res) => {
          const trackerData = res.data.trackers;
          // console.log(trackerData);

          setTracker(trackerData);
          setTemplate(trackerData.template);
        });
    }
  }, [trackerID]);

  //Change handler to handle form submission
  const handleSubmitForm = (e) => {
    e.preventDefault();

    //POST to add new session data to sessions array
    const URL = "http://localhost:5050";

    axios
      .post(
        `${URL}/sessions`,
        { formData },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })

      .catch((err) => {
        console.log("Error is: " + err);
      });
  };

  //Change handler to handle form changes
  const inputChangeHandler = (e) => {
    const { id, name, value } = e.target;
    console.log("name:" + name);
    console.log("value:" + value);

    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="trackerForm">
      <form action="submit" onSubmit={handleSubmitForm}>
        <div className="form__grid--wrap">
          <div className="grid__header">
            <h2>{tracker.tracker_name}</h2>
            <button className="submit">Submit</button>
          </div>
          {/* MAP to generate tracker grid rows from specific tracker's array of lables & inputs */}
          {template.map((row) => {
            return (
              <div className="grid__row--wrap">
                <div className="grid__label">
                  <h3>{row.label}</h3>
                </div>
                {/* Conditional rendering for form inputs */}
                {row.method == "BooleanRadio" ? (
                  <div className="grid__input">
                    <label htmlFor="yes">Yes</label>
                    <input
                      type="radio"
                      name="value4"
                      value={true}
                      onChange={inputChangeHandler}
                    />
                    <label htmlFor="no">No</label>
                    <input
                      type="radio"
                      name="value4"
                      value={false}
                      onChange={inputChangeHandler}
                    />
                  </div>
                ) : (
                  <div className="grid__input">
                    <input
                      type="number"
                      className="number__input"
                      name="number__input"
                      defaultValue={row.value}
                      onChange={inputChangeHandler}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </form>
    </section>
  );
}

export default TrackerForm;
