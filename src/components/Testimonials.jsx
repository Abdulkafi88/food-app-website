import '../styles/testimonials.css';
import img1 from '../assets/samir.jpg';
import img2 from '../assets/yusron.jpg';
import img3 from '../assets/alexander.jpg';
import img4 from '../assets/duman.jpg';
export default function Testimonials(){
    return(
        <section className='testimonials-section'>
            <div className='testimonials-container'>
            <h1 className='testimonials-title'>What our customers say!</h1>
                <div className='testimonials-menu'>
                    <div className='t-menus'>
                        <div className='image-name'>
                        <img className='testimonials-image' src={img1} alt="img1" />
                            <div className='testimonials-name'>
                                <h5 className='t-name'>Samir Khan</h5>
                                <h5 className='t-city'>Sandy, UT</h5>
                            </div>
                            </div>
                            <p className='testimonials-paragraph'>
                            chopped tomatoes, sliced cucumbers, red onion,
                            feta cheese, and olives. The salad is dressed with
                             olive oil and lemon juice and seasoned with salt,
                             pepper, and dried oregano.
                            </p>
                            <div className='star-icons'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                    </div>
                    <div className='t-menus'>
                        <div className='image-name'>
                        <img className='testimonials-image' src={img2} alt="img1" />
                            <div className='testimonials-name'>
                                <h5 className='t-name'>Samir Khan</h5>
                                <h5 className='t-city'>Sandy, UT</h5>
                            </div>
                            </div>
                            <p className='testimonials-paragraph'>
                            chopped tomatoes, sliced cucumbers, red onion,
                            feta cheese, and olives. The salad is dressed with
                             olive oil and lemon juice and seasoned with salt,
                             pepper, and dried oregano.
                            </p>
                            <div className='star-icons'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                    </div>
                    <div className='t-menus'>
                        <div className='image-name'>
                        <img className='testimonials-image' src={img3} alt="img1" />
                            <div className='testimonials-name'>
                                <h5 className='t-name'>Samir Khan</h5>
                                <h5 className='t-city'>Sandy, UT</h5>
                            </div>
                            </div>
                            <p className='testimonials-paragraph'>
                            chopped tomatoes, sliced cucumbers, red onion,
                            feta cheese, and olives. The salad is dressed with
                             olive oil and lemon juice and seasoned with salt,
                             pepper, and dried oregano.
                            </p>
                            <div className='star-icons'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                    </div>
                    <div className='t-menus'>
                        <div className='image-name'>
                        <img className='testimonials-image' src={img4} alt="img1" />
                            <div className='testimonials-name'>
                                <h5 className='t-name'>Samir Khan</h5>
                                <h5 className='t-city'>Sandy, UT</h5>
                            </div>
                            </div>
                            <p className='testimonials-paragraph'>
                            chopped tomatoes, sliced cucumbers, red onion,
                            feta cheese, and olives. The salad is dressed with
                             olive oil and lemon juice and seasoned with salt,
                             pepper, and dried oregano.
                            </p>
                            <div className='star-icons'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                    </div>
            </div>
            </div>
        </section>
    )
}