import { useEffect, useState } from 'react';
import '../trackerForm/trackerForm.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import sad from '../../assets/icons/frown.svg';
import neutral from '../../assets/icons/meh.svg';
import happy from '../../assets/icons/smile.svg';


//Tracker Form Component

function TrackerForm() {

    //State
    const [tracker, setTracker] = useState({});
    const [template, setTemplate] = useState([]);
    const [input, setInput] = useState([]);

    // console.log(tracker);

    const userInfo = useParams();

    const userId = userInfo.userId;
    const trackerId = userInfo.trackerId;

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


    //Change handler to handle form changes

    //Change handler to submit form 

    //POST to add new form info to specific tracker's array of data


    //Change Handler to pop up an alert to tell the user their 
        //information has been submitted and ask if they would like to 
        //return to track another session or navigate to their data visualizations


    return (
        <section className="trackerForm">
            <form action="submit">
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
                                            <input type='radio' />
                                            <label htmlFor="no">No</label>
                                            <input type='radio' />
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