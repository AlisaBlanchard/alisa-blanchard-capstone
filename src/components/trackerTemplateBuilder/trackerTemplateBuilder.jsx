import '../trackerTemplateBuilder/trackerTemplateBuilder.scss';
import backArrow from '../../assets/icons/arrow-left.svg';
import { useState } from 'react';
import axios from 'axios';

//Tracker Template Builder Component

function TrackerTemplateBuilder() {
    //State
    const [field, setField] = useState();

    //POST
    // axios
    //     .post(`http://localhost:5050/${userId}/`)

    //Handler to add field 

    const addFieldHandler = () => {
        console.log('clicked!');

    }


    return(
        <section className="templateBuilder">
            <img src={backArrow} alt="Back Arrow" />
            <form action="submit">
                <h1>Create New Tracker</h1>
                <div className='tracker__name'>
                    <label htmlFor="tracker__name">Tracker Name</label>
                    <input type="text" placeholder='Name' />
                </div>
                <label>Tracker Field</label>
                <div>
                    <label htmlFor="input__name">Input Name</label>
                    <input type="text" placeholder='Mood, Meals Eaten...' />
                </div>
                <div>
                    <label htmlFor="input__type">Input Type</label>
                    <input type="text" placeholder='Input Type Dropdown' />
                </div>
                <p onClick={addFieldHandler}>+ New Field</p>
                <button type='submit'>CREATE TRACKER</button>

            </form>
        </section>
    )
}

export default TrackerTemplateBuilder;