import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HomeBanner from '../components/HomeBanner';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


const MakeAnAppointment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());

    const [formData, setFormData] = useState({
        // Initialize form fields here
        id:'',
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        dateScheduled: '',
        timeScheduled: '',
        // TODO: below services are static and to be picked from form data
        services: [
            {
                id: 'service-001',
                serviceName: 'Men\'s Haircut',
                price: '€35.00'
            },
            {
                id: 'service-002',
                serviceName: 'Women\'s Haircut',
                price: '€40.00'
            },
            { 
                id: 'service-003',
                serviceName: 'children\'s Haircut',
                price: '€25.00'
            },
            
            {
                id: 'service-004',
                serviceName: 'Blow out',
                price: '€40.00'
            },
            {
                id: 'service-004',
                serviceName: 'Updo/Event Styling',
                price: '€70.00'
            },
            {
                id: 'service-005',
                serviceName: 'Bridal Hair (including trial)',
                price: '€150.00'
            },
            {
                id: 'service-006',
                serviceName: 'Deep Conditioning Treatment',
                price: '€30.00'
            },
            {
                id: 'service-007',
                serviceName: 'Keratin Treatment',
                price: '€200.00'
            },
            {
                id: 'service-008',
                serviceName: 'Scalp Treatment',
                price: '€50.00'
            },
            {
                id: 'service-009',
                serviceName: 'Classic Manicure',
                price: '€50.00'
            },
            {
                id: 'service-0010',
                serviceName: 'Gel Manicure',
                price: '€35.00'
            },
            {
                id: 'service-011',
                serviceName: 'Classic Pedicure',
                price: '€25.00'
            },
            {
                id: 'service-012',
                serviceName: 'Spa Pedicure',
                price: '€40.00'
            },
            {
                id: 'service-013',
                serviceName: 'Basic Nail Art (per nail)',
                price: '€70.00'
            },
            {
                id: 'service-014',
                serviceName: 'Intricate Nail Art (per nail)',
                price: '€150.00'
            },
            {
                id: 'service-015',
                serviceName: 'Express Facial',
                price: '€50.00'
            },
            {
                id: 'service-016',
                serviceName: 'Signature Facial',
                price: '€35.00'
            },
            {
                id: 'service-017',
                serviceName: 'Hydrating Facial',
                price: '€25.00'
            },
            {
                id: 'service-018',
                serviceName: 'Eyebrow Wax',
                price: '€30.00'
            },
            {
                id: 'service-019',
                serviceName: 'Lip Wax',
                price: '€10.00'
            },
            {
                id: 'service-020',
                serviceName: 'Full Face Wax',
                price: '€50.00'
            },
            {
                id: 'service-021',
                serviceName: 'Brazilian Wax',
                price: '€25.00'
            },
            {
                id: 'service-022',
                serviceName: 'Relaxation Package (Includes massage, facial, and manicure)',
                price: '€150.00'
            },
            {
                id: 'service-023',
                serviceName: 'Pamper Me Package (Includes pedicure, scalp treatment, and makeup)',
                price: '€120.00'
            }
        ]
        // Add more fields as needed
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        console.log(formData);
        formData.id=uuidv4();
        formData.dateScheduled=startDate;
        formData.timeScheduled=startTime;
        e.preventDefault();
        try {
            const response = await axios.post('https://stylesavvy.adaptable.app/reservations', formData);
            console.log('Response:', response.data);
            // Optionally handle success response
        } catch (error) {
            console.error('Error:', error);
            // Optionally handle error response
        }
    };

    return (
        <div>
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


                {/*<div className="control-row">*/}
                {/*    <div className="control">*/}
                {/*        <label htmlFor="password">Password</label>*/}
                {/*        <input id="password" type="password" name="password"/>*/}
                {/*    </div>*/}

                {/*    <div className="control">*/}
                {/*        <label htmlFor="confirm-password">Confirm Password</label>*/}
                {/*        <input*/}
                {/*            id="confirm-password"*/}
                {/*            type="password"*/}
                {/*            name="confirm-password"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}

                <hr/>
                <div className="control-row">
                    {/*Hair services dropdown list*/}
                    <div className="control">
                        <label htmlFor="phone">Hair Services</label>
                        <select id="hair-services" name="hair-services">
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
                        <select id="Nail-services" name="Nail-services">
                            <option value="">Select....</option>
                            <option value="classic-manicure-50">Classic Manicure - €35.00</option>
                            <option value="gel-manicure-30">Gel Manicure- €40.00</option>
                            <option value="classic-pedicure-25">Classic Pedicure- €25.00</option>
                            <option value="spa-pedicure-30">Spa Pedicure - €30.00</option>
                            <option value="basic-nail-art-50">Basic Nail Art- €50.00</option>
                            <option value="intricate-nail-art-70">Intricate Nail Art - €70.00</option>

                        </select>
                    </div>

                    {/*Skin services dropdown list*/}
                    <div className="control">
                        <label htmlFor="phone">Skin Services</label>
                        <select id="Skin-services" name="Skin-services">
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

                        <select id="spa-services" name="spa-services">
                            <option value="">Select....</option>
                            <option value="relaxation-package-150">Relaxation Package ( Includes Massage, Facial ,
                                Manicure ) - €150.00
                            </option>
                            <option value="pamperme-package-200">Pamper Me Package ( Includes Pedicure , Scalp teatment,
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
                                    dateFormat="MM/dd/yyyy"/>
                    </div>

                    <div className="control">
                        <label htmlFor="time">Select Time</label>
                        <DatePicker selected={startTime}
                                    onChange={(date) => setStartTime(date)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"/>
                    </div>

                </div>

                {/*<fieldset>*/}
                {/*    <legend>How did you find us?</legend>*/}
                {/*    <div className="control">*/}
                {/*        <input*/}
                {/*            type="checkbox"*/}
                {/*            id="google"*/}
                {/*            name="acquisition"*/}
                {/*            value="google"*/}
                {/*        />*/}
                {/*        <label htmlFor="google">Google</label>*/}
                {/*    </div>*/}

                {/*    <div className="control">*/}
                {/*        <input*/}
                {/*            type="checkbox"*/}
                {/*            id="friend"*/}
                {/*            name="acquisition"*/}
                {/*            value="friend"*/}
                {/*        />*/}
                {/*        <label htmlFor="friend">Referred by friend</label>*/}
                {/*    </div>*/}

                {/*    <div className="control">*/}
                {/*        <input type="checkbox" id="other" name="acquisition" value="other"/>*/}
                {/*        <label htmlFor="other">Other</label>*/}
                {/*    </div>*/}
                {/*</fieldset>*/}

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
            <ul>
        {formData.services.map(service => (
          <li key={service.id}>
            <span>{service.serviceName}</span>
            <span>{service.price}</span>
          </li>
        ))}
      </ul>
        </div>

    );
}

export default MakeAnAppointment;
