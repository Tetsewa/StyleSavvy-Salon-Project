import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HomeBanner from '../components/HomeBanner';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';


const MakeAnAppointment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const navigate = useNavigate();

    const [selectedOptionHairServices, setSelectedOptionHairServices] = useState('');
    const [selectedOptionSkinServices, setSelectedOptionSkinServices] = useState('');
    const [selectedOptionNailServices, setSelectedOptionNailServices] = useState('');
    const [selectedOptionSpaServices, setSelectedOptionSpaServices] = useState('');

    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0; // 0 = Sunday, 6 = Saturday
    };

    const filterWeekdays = (date) => {
        return isWeekday(date);
    };

    const [formData, setFormData] = useState({
        // Initialize form fields here
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        dateScheduled: '',
        timeScheduled: '',
        services: []
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData, [name]: value,
        }));
    };
    const handleSelectChangeHairServices = (event) => {
        setSelectedOptionHairServices(getValueById(event.target.value));
    };

    const handleSelectChangeSkinServices = (event) => {
        setSelectedOptionSkinServices(getValueById(event.target.value));
    };

    const handleSelectChangeSpaServices = (event) => {
        setSelectedOptionSpaServices(getValueById(event.target.value));
    };

    const handleSelectChangeNailServices = (event) => {
        setSelectedOptionNailServices(getValueById(event.target.value));
    };

    const handleSubmit = async (e) => {
        console.log(formData);
        formData.id = uuidv4();
        formData.dateScheduled = startDate;
        formData.timeScheduled = startTime;
        if (selectedOptionHairServices !== null && selectedOptionHairServices !== '') {
            formData.services.push(selectedOptionHairServices);
        }
        if (selectedOptionSkinServices != null && selectedOptionSkinServices !== '') {
            formData.services.push(selectedOptionSkinServices);
        }
        if (selectedOptionNailServices != null && selectedOptionNailServices !== '') {
            formData.services.push(selectedOptionNailServices);
        }
        if (selectedOptionSpaServices != null && selectedOptionSpaServices !== '') {
            formData.services.push(selectedOptionSpaServices);
        }
        e.preventDefault();
        try {
            const response = await axios.post('https://stylesavvy.adaptable.app/reservations', formData);
            console.log('Response:', response.data);
            // redirect to My reservation page
            navigate(`/MyReservation/${response.data.id}`);


        } catch (error) {
            console.error('Error:', error);
        }
    };


    // Load the picklist mapping services

    const [dataMap, setDataMap] = useState(new Map());

    useEffect(() => {
        // Simulate fetching JSON data (replace with actual fetch call)
        const fetchData = async () => {
            try {
                const response = await fetch('https://json-api.adaptable.app/services'); // Replace 'example.json' with your JSON file or API endpoint
                const jsonData = await response.json();

                // Convert JSON object to Map
                const mapData = jsonToMap(jsonData);
                setDataMap(mapData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to ensure useEffect runs only once

    // Function to convert JSON object to Map with "id" field as keys
    const jsonToMap = (json) => {
        const map = new Map();
        json.forEach(item => {
            map.set(item.id, item);
        });
        return map;
    };

    // Function to get value from Map using "id"
    const getValueById = (id) => {
        return dataMap.get(id);
    };

    return (<div>
            <HomeBanner/>

            {/*<h1 className="text-3xl font-bold ">Make An Appointment</h1>*/}

            <form onSubmit={handleSubmit}>
                <h2>Make an appointment!</h2>
                <p>We just need a little bit of data from you to get you started 🚀</p>

                <div className="control-row">
                    <div className="control">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name="firstName" value={formData.firstName}
                               onChange={handleChange}/>
                    </div>

                    <div className="control">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="lastName" value={formData.lastName}
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="control">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" value={formData.email}
                           onChange={handleChange}/>
                </div>

                <div className="control">
                    <label htmlFor="contact-number">Contact Number</label>
                    <input type="text" id="contact-number" name="contactNumber" value={formData.contactNumber}
                           onChange={handleChange}/>
                </div>

                <hr/>
                <div className="control-row">
                    {/*Hair services dropdown list*/}
                    <div className="control">
                        <label htmlFor="phone">Hair Services</label>
                        <select id="hair-services" name="hair-services" onChange={handleSelectChangeHairServices}>
                            <option value="">Select....</option>
                            <option value="men-hair-cut-35">Men's Haircut - €35.00</option>
                            <option value="women-hair-cut-40">Women's Haircut - €40.00</option>
                            <option value="kids-hair-cut-30">Kids Haircut - €30.00</option>
                            <option value="blow-out-40">Blow Out - €40.00</option>
                            <option value="event-styling-70">Updo/Event Styling - €70.00</option>
                            <option value="deep-codn-treat-50">Deep Conditioning Treatment - €50.00</option>
                            <option value="keratin-treat-80">Keratin Treatment - €80.00</option>
                            <option value="scalp-treat-60">Scalp Treatment - €60.00</option>
                            <option value="bridal-hair-50">Bridal Hair(Including trial) - €50.00</option>
                        </select>
                    </div>


                    {/*Nail services dropdown list*/}
                    <div className="control">
                        <label htmlFor="phone">Nail Services</label>
                        <select id="nail-services" name="nail-services" onChange={handleSelectChangeNailServices}>
                            <option value="">Select....</option>
                            <option value="classic-manicure-50">Classic Manicure - €35.00</option>
                            <option value="gel-manicure-40">Gel Manicure- €40.00</option>
                            <option value="classic-pedicure-25">Classic Pedicure- €25.00</option>
                            <option value="spa-pedicure-30">Spa Pedicure - €30.00</option>
                            <option value="basic-nail-art-50">Basic Nail Art- €50.00</option>
                            <option value="intricate-nail-art-70">Intricate Nail Art - €70.00</option>

                        </select>
                    </div>

                    {/*Skin services dropdown list*/}
                    <div className="control">
                        <label htmlFor="phone">Skin Services</label>
                        <select id="skin-services" name="skin-services" onChange={handleSelectChangeSkinServices}>
                            <option value="">Select....</option>
                            <option value="express-facial-50">Express Facial - €50.00</option>
                            <option value="signature-facial-35">Signature Facial - €35.00</option>
                            <option value="hydrating-facial-25">Hydrating Facial - €25.00</option>
                            <option value="eyebrow-wax-35">Eyebrow Wax - €35.00</option>
                            <option value="lip-wax-20">Lip Wax - €20.00</option>
                            <option value="full-face-wax-50">Full Face Wax - €50.00</option>
                            <option value="brazilian-wax-80">Brazilian Wax - €80.00</option>

                        </select>
                    </div>

                    {/*Spa services dropdown list*/}
                    <div className="control">
                        <label htmlFor="phone">Spa Services</label>

                        <select id="spa-services" name="spa-services" onChange={handleSelectChangeSpaServices}>
                            <option value="">Select....</option>
                            <option value="relaxation-package-150">Relaxation Package(Includes Massage,Facial,Manicure)
                                - €150.00
                            </option>
                            <option value="pamperme-package-200">Pamper Me Package ( Includes Pedicure , Scalp
                                treatment,
                                MakeUp) - €200.00
                            </option>
                        </select>
                    </div>
                </div>

                <div className="control-row">

                    <div className="control">
                        <label htmlFor="date">Select Date</label>
                        <DatePicker selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    timeInputLabel="Date:"
                                    dateFormat="MM/dd/yyyy"
                                    filterDate={filterWeekdays}/>
                    </div>
                    <div className="control">
                        <label htmlFor="time">Select Time</label>
                        <DatePicker selected={startTime}
                                    onChange={(date) => setStartTime(date)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                    minTime={new Date(0, 0, 0, 9, 0)}
                                    maxTime={new Date(0, 0, 0, 17, 0)}/>
                    </div>

                </div>
                <div className="control">
                    <label htmlFor="terms-and-conditions">
                        <input type="checkbox" id="terms-and-conditions" name="terms"/>I
                        agree to the terms and conditions
                    </label>
                </div>

                <p className="form-actions">
                    <button type="reset" className="button button-flat">
                        Reset
                    </button>
                    <button type="submit" className="button">
                        Book Now!
                    </button>
                </p>
            </form>
        </div>

    );
}

export default MakeAnAppointment;
