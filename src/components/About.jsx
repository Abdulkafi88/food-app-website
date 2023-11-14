import '../styles/about.css';
import img1 from '../assets/restaurant.jpg';
import img2 from '../assets/restaurant-chef.jpg';
export default function About(){
    return(
    <section className="about-section">
    <div className="about-section-container">
        <div className='right-container'>
            <h4 className='about-title'>Little Lemon</h4>
            <h6 className='about-general-text chicago' >seattle</h6>
            <p className='about-general-text'>
                Come dine with us at Little Lemon! Our menu features a wide
                 variety of delicious dishes made with only the freshest ingredients.
                  From classic favorites to creative new takes on your favorite foods,
                   there's something for everyone.
            </p>
        </div>
        <div className='left-container'>
            <img className='about-image2' src={img2} />
            <img className='about-image1' src={img1} />
        </div>
    </div>
</section>
)
}