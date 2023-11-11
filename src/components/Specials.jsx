import '../styles/specials.css';
import img1 from '../assets/greek-salad.jpg';
import img2 from '../assets/grilled-fish.jpg';
import img3 from '../assets/pasta.jpg';
export default function Specials(){
    return(
        <section className='specials-section'>
            <div className='specials-container'>
                <div className='week-online'>
                    <h1 className='specials-title'>This week's Specials!</h1>
                    <button type="button" className='reserve-button'>Order Online</button>
                </div>
                <div className='specials-menu'>
                    <div className='s-menus'>
                        <img className='special-image' src={img1} alt="img1" />
                            <div className='special-name'>
                                <h5>Greek Salad</h5>
                                <h5 className='price'>$12.99</h5>
                            </div>
                            <p className='special-paragraph'>
                            chopped tomatoes, sliced cucumbers, red onion,
                            feta cheese, and olives. The salad is dressed with
                             olive oil and lemon juice and seasoned with salt,
                             pepper, and dried oregano.
                            </p>
                            <h5 className='order-delivery'>Order a delivery</h5>
                    </div>
                    <div className='s-menus'>
                    <img className='special-image' src={img2} alt="img1" />
                        <div className='special-name'>
                            <h5>Grilled Fish</h5>
                            <h5 className='price'>$12.99</h5>
                        </div>
                        <p className='special-paragraph'>
                            chopped tomatoes, sliced cucumbers, red onion,
                            feta cheese, and olives. The salad is dressed with
                             olive oil and lemon juice and seasoned with salt,
                             pepper, and dried oregano.
                            </p>
                            <h5 className='order-delivery'>Order a delivery</h5>
                    </div>
                    <div className='s-menus'>
                    <img className='special-image' src={img3} alt="img1" />
                        <div className='special-name'>
                            <h5>Pasta</h5>
                            <h5 className='price'>$12.99</h5>
                        </div>
                        <p className='special-paragraph'>
                            chopped tomatoes, sliced cucumbers, red onion,
                            feta cheese, and olives. The salad is dressed with
                             olive oil and lemon juice and seasoned with salt,
                             pepper, and dried oregano.
                            </p>
                            <h5 className='order-delivery'>Order a delivery</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}