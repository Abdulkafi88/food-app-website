import '../styles/hero.css';
import heroImage from '../assets/restaurant-food.jpg'
import { Link } from 'react-router-dom';
export default function Hero(){
    return(
        <section className="hero-section">
            <div className="hero-container">
                <div className='right-container'>
                    <h4 className='hero-title'>Little Lemon</h4>
                    <h6 className='hero-general-text chicago' >Chicago</h6>
                    <p className='hero-general-text'>
                        Come dine with us at Little Lemon! Our menu features a wide
                         variety of delicious dishes made with only the freshest ingredients.
                          From classic favorites to creative new takes on your favorite foods,
                           there's something for everyone.
                    </p>
                    <Link to="/bookingForm"><button type="button" className='reserve-button'>Reserve a table</button></Link>
                </div>
                <div className='left-container'>
                    <img className='hero-image' src={heroImage} />
                </div>
            </div>
        </section>
    )
}