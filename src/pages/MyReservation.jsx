import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeBanner from "../components/HomeBanner";
import { useParams } from "react-router-dom";
import axios from "axios";

const MyReservation = () => {
    const { reservationId } = useParams();
    const navigate = useNavigate();

    const [userData, setUserData] = useState(null);
    const columnsToShow = ['serviceName', 'price'];
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        dateScheduled: '',
        timeScheduled: '', 
        services: []
    });

    const [total, setTotal] = useState(0);
    useEffect(() => {
        if (formData.services.length > 0) {
            const totalAmount = formData.services.reduce((accumulator, currentValue) => {
                const price = parseFloat(currentValue.price); // Convert price to a float
                return accumulator + (isNaN(price) ? 0 : price); // Add price to accumulator if it's a valid number
            }, 0);
            setTotal(totalAmount.toFixed(2)); // Fixing the total amount to 2 decimal places
        }
    }, [formData.services]);


    const [showPopup, setShowPopup] = useState(false);
    const handleClosePopup = () => {
        // Close the popup
        setShowPopup(false);
        navigate(`/`);

      };
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
// Fetch user details using the userId
    useEffect(() => {
        fetch(`https://stylesavvy.adaptable.app/reservations/${reservationId}`)
            .then(response => response.json())
            .then(data => {
                setUserData(data);
                setFormData({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    contactNumber: data.contactNumber,
                    dateScheduled: formatDate(data.dateScheduled),
                    //dateScheduled: data.dateScheduled,
                    timeScheduled: data.timeScheduled.split('T')[1].split('.')[0],
                    //timeScheduled: data.timeScheduled.split('T')[1].split('.')[0], 
                    services: data.services
                });
            })
            .catch(error => console.error("Error fetching user data:", error));
    }, [reservationId]);

    const formatDate = (dateTimeString) => {
        const dateObject = new Date(dateTimeString);
        const day = dateObject.getDate().toString().padStart(2, '0');
        const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
        const year = dateObject.getFullYear();
        return `${year}-${month}-${day}`;
    };
 // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDiscard = (e) => {
        e.preventDefault();
        axios.delete(`https://stylesavvy.adaptable.app/reservations/${reservationId}`)
            .then(response => {
                console.log('Record deleted successfully');
                navigate(`/MakeAnAppointment`);
            })
            .catch(error => {
                console.error('Error deleting record:', error);
            });
    };

    const handleUpdateRecord = (e) => {
        e.preventDefault();
        axios.put(`https://stylesavvy.adaptable.app/reservations/${reservationId}`, formData)
            .then(response => {
                console.log('Record updated successfully');
                // Show the popup after successful form submission
                setShowPopup(true);
                
            //navigate(`/`);
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
                    <h2>Finalize your booking! Verify details below</h2>
                    <div className="control-row">
                        <div className="control">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleChange}/>
                        </div>
                        <div className="control">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="control">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" value={formData.email} onChange={handleChange}/>
                    </div>
                    <div className="control">
                        <label htmlFor="contact-number">Contact Number</label>
                        <input type="text" id="contact-number" name="contactNumber" value={formData.contactNumber} onChange={handleChange}/>
                    </div>
                    <div className="control">
                        <label htmlFor="date">Scheduled Date</label>
                        <input type="date" id="scheduled-date" name="dateScheduled" value={formData.dateScheduled} onChange={handleChange}/>
                    </div>
                    <div className="control">
                        <label htmlFor="time">Scheduled Time</label>
                        <input type="time" id="scheduled-time" name="timeScheduled" value={formData.timeScheduled} onChange={handleChange}/>
                    </div>
                    <hr/>
                    <TableFromJSON data={formData.services} columns={columnsToShow} />
                    <p>Total: €{total}</p>
                    <p className="form-actions">
                        <button className="button" onClick={handleDiscard}>Discard details</button>
                        <button className="button" onClick={handleUpdateRecord}>Confirm!</button>
                    </p>
                </form>
            )}
            {showPopup && (
                
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Success!</h2>
                        <p>Congratulations! Your appointment got confirmed 🎉.</p>
                        <button onClick={handleClosePopup} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                            Close
                        </button>
                    </div>
                </div>
             ) }
            
        </div>
    );
}

export default MyReservation;
