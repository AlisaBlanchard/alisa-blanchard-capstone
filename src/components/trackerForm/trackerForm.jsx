import { useEffect, useState } from 'react';
import '../trackerForm/trackerForm.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import sad from '../../assets/icons/frown.svg';
import neutral from '../../assets/icons/meh.svg';
import happy from '../../assets/icons/smile.svg';


//Tracker Form Component

function TrackerForm({userId, trackerId}) {

    //State
    const [tracker, setTracker] = useState({});
    const [template, setTemplate] = useState([]);
    const [input, setInput] = useState([]);
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


    // console.log(tracker);

    //GET to retrieve tracker info by userId & trackerId
    useEffect(() => {
        const URL = "http://localhost:5050";


        axios
        .get(`${URL}/trackers/${userId}/${trackerId}`)

        .then((res) => {

            const trackerData = res.data.trackers;
            // console.log(trackerData);

            setTracker(trackerData);
            setTemplate(trackerData.template);
        });
    }, []);

    //Change handler to handle form submission
    const handleSubmitForm = (e) => {
        e.preventDefault();

        //POST to add new tracker to trackers array
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

    //Change Handler to pop up an alert to tell the user their 
        //information has been submitted and ask if they would like to 
        //return to track another session or navigate to their data visualizations


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
                        return(
                            <div className="grid__row--wrap">
                                <div className="grid__label">
                                    <h3>{row.label}</h3>
                                </div>
                                
                                {/* Needs to generate specific input style based on method received from template 
                                if/else/else/else statement covering all available input options?*/}

                                        <div className="grid__input">
                                            <label htmlFor="yes">Yes</label>
                                            <input type='radio' name='Yes' value={true} onChange={inputChangeHandler}/>
                                            <label htmlFor="no">No</label>
                                            <input type='radio' name='No' value={false} onChange={inputChangeHandler}/>
                                        </div>
                                {/* if (row.method == 'BooleanRadio') {
                                }
                                else if (row.method == 'number') {
                                    <div className="grid__input">
                                        <input type='number' placeholder='0-100'/>
                                    </div>

                                }
                                
                                else if (row.method == 'rangeRadio') {
                                    <div className="grid__input">
                                        <label htmlFor="1">1</label>
                                        <input type='radio' />
                                        <label htmlFor="2">2</label>
                                        <input type='radio' />
                                        <label htmlFor="3">3</label>
                                        <input type='radio' />
                                        <label htmlFor="4">4</label>
                                        <input type='radio' />
                                        <label htmlFor="n5">5</label>
                                        <input type='radio' />
                                    </div>
                                }

                                else if (row.method == 'moodRadio') {
                                    <div className="grid__input">
                                        <div className="input__wrap">
                                            <input type='radio' className='sad' />
                                            <input type='radio' className='neutral'/>
                                            <input type='radio' className='happy'/>
                                        </div>

                                        <div className="img__wrap">
                                            <img src={sad} alt="sad face" />
                                            <img src={neutral} alt="neutral face" />
                                            <img src={happy} alt="happy face" />
                                        </div>
                                    </div>

                                }
 */}
                            </div>
    
                        )
                    })}
                    
                </div>
            </form>
        </section>
    )
}

export default TrackerForm;