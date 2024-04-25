import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HomeBanner from '../components/HomeBanner';


const MakeAnAppointment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());




    return (
        <div>
            <HomeBanner/>

            {/*<h1 className="text-3xl font-bold ">Make An Appointment</h1>*/}

            <form>
                <h2>Make an appointment!</h2>
                <p>We just need a little bit of data from you to get you started 🚀</p>

                <div className="control-row">
                    <div className="control">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name="first-name"/>
                    </div>

                    <div className="control">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="last-name"/>
                    </div>
                </div>

                <div className="control">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email"/>
                </div>

                <div className="control">
                    <label htmlFor="contact-number">Contact Number</label>
                    <input type="text" id="contact-number" name="contact-number"/>
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
                            <option value="men-hair-cut-35">Men's Haircut - €35.00</option>
                            <option value="women-hair-cut-40">Women's Haircut - €40.00</option>
                            <option value="kids-hair-cut-30">Kids Haircut - €30.00</option>
                            <option value="blow-out-40">Blow Out - €40.00</option>
                            <option value="event-styling-70">Updo/Event Styling - €70.00</option>
                            <option value="deep-codn-treat-50">Deep Conditioning Treatment - €50.00</option>
                            <option value="keratin-treat-80">Keratin Treatment - €80.00</option>
                            <option value="scalp-treat-60">Scalp Treatment - €60.00</option>
                            <option value="bidal-hair-50">Bridal Hair(Including trial) - €50.00</option>
                        </select>
                    </div>


                    {/*Nail services dropdown list*/}
                    <div className="control">
                        <label htmlFor="phone">Nail Services</label>
                        <select id="Nail-services" name="Nail-services">
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
                            <option value="relaxation-package-150">Relaxation Package ( Includes Massage, Facial , Manicure ) - €150.00</option>
                            <option value="pamperme-package-200">Pamper Me Package ( Includes Pedicure , Scalp teatment, MakeUp) - €200.00</option>
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
                        Book Now
                    </button>
                </p>
            </form>
        </div>

    );
}

export default MakeAnAppointment;
