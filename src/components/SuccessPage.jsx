import React from "react";
import '../styles/confirmBooking.css'
import '../styles/successPage.css'
import { useLocation,useNavigate } from "react-router-dom";


export default function SuccessPage(){

    const navigate = new useNavigate();
    function handleBackHome(){
        navigate('/');
    }
    return(
        <section className="confirm-booking-section">
            <div className="confirm-container">
                <div className="content-container">
                    <div className="success-title">
                        <i class="fa-solid fa-circle-check ml10"></i>
                        <h1 className="bookingd">Congatulations!</h1>
                        <p className="success-paragraph">Your booking has been confirmed, check your email for a confirmation
                        . We'll see you soon!
                        </p>
                        <button onClick={handleBackHome} mb={3} className="back-home">
                            Back to Home Page
                        </button>
                    </div>

                    <div className="details-container">
                    </div>
                </div>
        </div>
        </section>
    )
}