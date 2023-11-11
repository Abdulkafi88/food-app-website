import React from "react";
import '../styles/confirmBooking.css'
import { useLocation,useNavigate } from "react-router-dom";
export default function ConfirmedBooking({dispatch}){

    const location = useLocation();
    const navigate = new useNavigate();
    const time = location.state.time;

    function handleSubmit (e){
        e.preventDefault();
        dispatch({value : time})
        navigate('/SuccessPage');
        }

    return(
        <section className="confirm-booking-section">
            <div className="confirm-container">
                <div className="content-container">
            <h1 className="bookingd">Booking Details</h1>
                    <div className="details-container">
                        <h1 className="tdpo">Time</h1>
                        <h1 className="tdpov">{location.state.time}</h1>
                    </div>
                    <div className="details-container">
                        <h1 className="tdpo">Date</h1>
                        <h1 className="tdpov">{location.state.date}</h1>
                    </div>
                    <div className="details-container">
                        <h1 className="tdpo">Party size</h1>
                        <h1 className="tdpov">{location.state.numbr}</h1>
                    </div>
                    <div className="details-container">
                        <h1 className="tdpo">Occasion</h1>
                        <h1 className="tdpov">{location.state.occasion}</h1>
                    </div>
                    <form onSubmit={handleSubmit} style={{display: "grid",gap:"10px"}}>

                            <label className='form-labels' htmlFor="res-name">Enter your name *</label>
                            <input required className='form-input' name="name"/>

                            <label className='form-labels' htmlFor="res-phone">Enter Phone #*</label>
                            <input  type='number' required className='form-input' name="name"/>

                            <label className='form-labels' htmlFor="res-phone">Additional request</label>
                            <textarea className='form-input' placeholder='Here is a sample placeholder' />
                            <button className='form-input continue-button' type="submit">Confirm Booking</button>
                        </form>
                </div>
        </div>
        </section>
    )
}