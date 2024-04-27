import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import HomeBanner from "../components/HomeBanner";
import {useParams} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import axios from "axios";

const MyReservation = () => {
    const {reservationId} = useParams();

    const [userData, setUserData] = useState(null);

    const [services, setServices] = useState(null);
    const columnsToShow = ['serviceName', 'price'];
    const navigate = useNavigate();

    const formatDate = (dateTimeString) => {
        const dateObject = new Date(dateTimeString);
        const day = dateObject.getDate().toString().padStart(2, '0'); // Get the day and pad with leading zero if necessary
        const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Get the month (zero-based index) and pad with leading zero if necessary
        const year = dateObject.getFullYear(); // Get the full year
        console.log(year);
        return `${year}-${month}-${day}`;
    };

    const [formData, setFormData] = useState({
        // Initialize form fields here
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        dateScheduled: '',
        timeScheduled: ''
    });

    const TableFromJSON = ({ data, columns }) => {
        return (
            <table>
                <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {columns.map((column, innerIndex) => (
                            <td key={innerIndex}>{item[column]}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        );
    };


    useEffect(() => {
        // Fetch user details using the userId

        fetch(`https://stylesavvy.adaptable.app/reservations/${reservationId}`)
            .then((response) => response.json())
            .then((data) => {
                setUserData(data);
            })
            .catch((error) => console.error("Error fetching user data:", error));
    }, [reservationId]);

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleDiscard = async (e) => {
        e.preventDefault();
        axios.delete(`https://stylesavvy.adaptable.app/reservations/${reservationId}`)
            .then(response => {
                console.log('Record deleted successfully');
                // redirect to My reservation page
                navigate(`/MakeAnAppointment`);
            })
            .catch(error => {
                console.error('Error deleting record:', error);
            });
    };

    const handleUpdateRecord = () => {
        // Replace 'your-api-endpoint' with your actual API endpoint
        axios.put(`https://stylesavvy.adaptable.app/reservations/${reservationId}`, formData)
            .then(response => {
                console.log('Record updated successfully');
                navigate(`/MakeAnAppointment`);
            })
            .catch(error => {
                console.error('Error updating record:', error);
            });
    };


    return (

        <div>
            <HomeBanner/>

            {userData && (

                <form style={{width: '80%'}}>

                    <h2>Finalise! your booking verify details below</h2>
                    <div className="control-row">
                        <div className="control">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" name="first-name" value={userData.firstName} onChange={handleChange}/>
                        </div>

                        <div className="control">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" name="last-name" value={userData.lastName} onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="control">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" value={userData.email} onChange={handleChange}/>
                    </div>

                    <div className="control">
                        <label htmlFor="contact-number">Contact Number</label>
                        <input type="text" id="contact-number" name="contact-number" value={userData.contactNumber} onChange={handleChange}/>
                    </div>

                    <div className="control">
                        <label htmlFor="date">Scheduled Date</label>
                        <input type="date" id="scheduled-date" name="date" value={formatDate(userData.dateScheduled)} onChange={handleChange}/>
                    </div>

                    <div className="control">
                        <label htmlFor="time">Scheduled Time</label>
                        <input type="time" id="scheduled-time" name="scheduled-time" value={userData.timeScheduled.split('T')[1].split('.')[0]} onChange={handleChange}/>
                    </div>
                    <TableFromJSON data={userData.services} columns={columnsToShow} />
                    <hr/>
                    <p className="form-actions">
                        <button className="button" onClick={handleDiscard}>
                            Discard details
                        </button>
                        <button type="submit" className="button" onSubmit={handleUpdateRecord}>
                            Book Now!
                        </button>
                    </p>
                </form>
            )}

        </div>
    );
}

export default MyReservation
