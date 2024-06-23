import  { useState } from 'react';
import axios from 'axios';
import '../styles/event.css';
const CreateEvent = () => {
    const [eventData, setEventData] = useState({
        title: '',
        description: '',
        datetime: '',
        picture:[]
    });
    const [errorMessage, setErrorMessage] = useState('');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEventData({
            ...eventData,
            [name]: value,
        });
        setErrorMessage('');
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let i = 0;i<eventData.picture.length ;i++){
            formData.append('files',eventData.picture[i])
        }
        formData.append("content", eventData.description); 
        formData.append("title", eventData.title); 
        formData.append("datetime", eventData.datetime); 
        axios.post('http://localhost:8000/api/event',formData).then(result=>console.log(result)).catch(err=>console.log(err))
    };
    const isFutureDate = (dateString) => {
        const enteredDate = new Date(dateString);
        const currentDate = new Date();
        return enteredDate > currentDate;
    };
    const isFormValid = () => {
        return isFutureDate(eventData.datetime);
    };
    return (
        <div className='event'>
            <form onSubmit={handleSubmit} >
                <h3 className="titel">Create an event</h3>
                <label className="label">Title</label>
                <input
                className="inp"
                    type="text"
                    name="title"
                    placeholder="title for the event"
                    value={eventData.title}
                    onChange={handleInputChange}
                />
                <label className="label">Description</label>
                <textarea
                    className="textt"
                    name="description"
                    cols="30"
                    rows="10"
                    placeholder="description for the event"
                    value={eventData.description}
                    onChange={handleInputChange}
                ></textarea>
                <label className="label">Pictures for the event</label>
                <input className="inp" type="file" placeholder='picture for the event' multiple onChange={e=>setEventData({...eventData,picture:e.target.files})}/>
                <label className="label">When is the event</label>
                <input
                className="inp"
                    type="datetime-local"
                    name="datetime"
                    value={eventData.datetime}
                    onChange={(e) => {
                        const newDateTime = e.target.value;
                        if (isFutureDate(newDateTime)) {
                            handleInputChange(e);
                        } else {
                            setErrorMessage('Please select a future date and time.');
                        }
                    }}
                />
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <button disabled={!isFormValid()} type='submit' className="btn3">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;
