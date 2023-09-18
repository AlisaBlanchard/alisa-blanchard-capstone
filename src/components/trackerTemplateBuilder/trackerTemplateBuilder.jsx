import "../trackerTemplateBuilder/trackerTemplateBuilder.scss";
import backArrow from "../../assets/icons/arrow-left.svg";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

//Tracker Template Builder Component

function TrackerTemplateBuilder() {
  const { userId } = useParams();

  //State
  const [formData, setFormData] = useState({
    trackerName: "",
    userId: userId,
    label1: "",
    method1: "",
    label2: "",
    method2: "",
    label3: "",
    method3: "",
    label4: "",
    method4: "",
  });

  let UUID = uuidv4();

  const methodOptions = [
    "Input Type",
    "Number",
    "BooleanRadio"
  ];

  //Change handler to handle form submission
  const handleSubmitForm = (e) => {
    e.preventDefault();

    //POST to add new tracker to trackers array
    const URL = "http://localhost:5050";

    axios
      .post(
        `${URL}/trackers`,
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

  //Change Handler to handle input change
  const inputChangeHandler = (e) => {

    const { id, name, value } = e.target;
    console.log("name:" + name);
    console.log("value:" + value);

    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="templateBuilder">
      <Link to={`/${userId}/tracker`}>
        <img src={backArrow} alt="Back Arrow" />
      </Link>
      <form action="submit" onSubmit={handleSubmitForm}>
        <h1>Create New Tracker</h1>

        <div className="tracker__name">
          <label htmlFor="tracker__name">Tracker Name</label>
          <input
            type="text"
            placeholder="Name"
            name="trackerName"
            onChange={inputChangeHandler}
            defaultValue={formData.trackerName}
          />
        </div>

        <label>Tracker Field</label>
        <div>
          <label htmlFor="input__name">Input Name</label>
          <input
            type="text"
            placeholder="Mood, Meals Eaten..."
            name="label1"
            onChange={inputChangeHandler}
            id="field1"
            value={formData.label1}
          />
        </div>
        <div>
          <label htmlFor="input__type">Input Type</label>
          <select
            name="method1"
            value={formData.method1}
            onChange={inputChangeHandler}
            placeholder="Input Type"
          >
            {methodOptions.map((method) => {
              return (
                <option
                  value={method}
                  key={methodOptions.index}
                  placeholder="Input Type"
                  id="field2"
                >
                  {method}
                </option>
              );
            })}
          </select>
        </div>
        <label>Tracker Field</label>
        <div>
          <label htmlFor="input__name">Input Name</label>
          <input
            type="text"
            placeholder="Mood, Meals Eaten..."
            name="label2"
            onChange={inputChangeHandler}
            id="field3"
            value={formData.label2}
          />
        </div>
        <div>
          <label htmlFor="input__type">Input Type</label>
          <select
            name="method2"
            value={formData.method2}
            onChange={inputChangeHandler}
          >
            {methodOptions.map((method) => {
              return (
                <option
                  value={method}
                  key={methodOptions.index}
                  placeholder="Input Type"
                  id="field4"
                >
                  {method}
                </option>
              );
            })}
          </select>
        </div>

        <label>Tracker Field</label>
        <div>
          <label htmlFor="input__name">Input Name</label>
          <input
            type="text"
            placeholder="Mood, Meals Eaten..."
            name="label3"
            onChange={inputChangeHandler}
            id="field5"
            value={formData.label3}
          />
        </div>
        <div>
          <label htmlFor="input__type">Input Type</label>
          <select
            name="method3"
            value={formData.method3}
            onChange={inputChangeHandler}
          >
            {methodOptions.map((method) => {
              return (
                <option
                  value={method}
                  key={methodOptions.index}
                  placeholder="Input Type"
                  id="field6"
                >
                  {method}
                </option>
              );
            })}
          </select>
        </div>

        <label>Tracker Field</label>
        <div>
          <label htmlFor="input__name">Input Name</label>
          <input
            type="text"
            placeholder="Mood, Meals Eaten..."
            name="label4"
            onChange={inputChangeHandler}
            id="field7"
            value={formData.label4}
          />
        </div>
        <div>
          <label htmlFor="input__type">Input Type</label>
          <select
            name="method4"
            value={formData.method4}
            onChange={inputChangeHandler}
          >
            {methodOptions.map((method) => {
              return (
                <option
                  value={method}
                  key={methodOptions.index}
                  placeholder="Input Type"
                  id="field8"
                >
                  {method}
                </option>
              );
            })}
          </select>
        </div>

        <button type="submit">CREATE TRACKER</button>
      </form>
    </section>
  );
}

export default TrackerTemplateBuilder;
