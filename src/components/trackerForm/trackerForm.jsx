import { useEffect, useState } from 'react';
import '../trackerForm/trackerForm.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';


//Tracker Form Component

function TrackerForm() {


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
                        <h2>Tracker Title</h2>
                        <button className="submit">Submit</button>
                    </div>
                    {/* MAP to generate tracker grid rows from specific tracker's array of lables & inputs */}
                    <div className="grid__row--wrap">
                        <div className="grid__lable">
                            <h3>Focused</h3>
                        </div>

                        <div className="grid__input">
                            <button type='radio' className='radio'> <p>Yes</p></button>
                            <button type='radio' className='radio'> <p>No</p></button>
                        </div>
                    </div>
                    <div className="grid__row--wrap">
                        <div className="grid__lable">
                            <h3>Focused</h3>
                        </div>

                        <div className="grid__input">
                            <button type='radio' className='radio'> <p>Yes</p></button>
                            <button type='radio' className='radio'> <p>No</p></button>
                        </div>
                    </div>
                    <div className="grid__row--wrap">
                        <div className="grid__lable">
                            <h3>Focused</h3>
                        </div>

                        <div className="grid__input">
                            <button type='radio' className='radio'> <p>Yes</p></button>
                            <button type='radio' className='radio'> <p>No</p></button>
                        </div>
                    </div>
                    <div className="grid__row--wrap">
                        <div className="grid__lable">
                            <h3>Focused</h3>
                        </div>

                        <div className="grid__input">
                            <button type='radio' className='radio'> <p>Yes</p></button>
                            <button type='radio' className='radio'> <p>No</p></button>
                        </div>
                    </div>

                </div>
            </form>
        </section>
    )
}

export default TrackerForm;