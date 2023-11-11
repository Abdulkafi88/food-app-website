import '../styles/footer.css'
import footerLogo from '../assets/footer-logo.png'


export default function Navbar(){
    return(<div className = "footer-wrapper">
            <div className='footer-container'>
                <img className='footer-logo' src={footerLogo}/>
                <div className='footer-menu-container'>
                    <h4 className='footer-menu-text'>Doormat Navigations</h4>
                    <div className='footer-category-list'>
                        <h4 className='category-text'>Home</h4>
                        <h4 className='category-text'>About</h4>
                        <h4 className='category-text'>Menu</h4>
                        <h4 className='category-text'>Reservations</h4>
                        <h4 className='category-text'>Order Online</h4>
                        <h4 className='category-text'>Login</h4>
                    </div>
                </div>
                <div className='footer-menu-container'>
                    <h4 className='footer-menu-text'>Contact</h4>
                    <div className='footer-category-list'>
                        <h4 className='category-text'>Address</h4>
                        <h4 className='category-text'>Phone Number</h4>
                        <h4 className='category-text'>Email</h4>
                    </div>
                </div>
                <div className='footer-menu-container'>
                    <h4 className='footer-menu-text'>Links to social media</h4>
                    <div className='footer-category-list'>
                        <h4 className='category-text'>Instagram</h4>
                        <h4 className='category-text'>Facebook</h4>
                        <h4 className='category-text'>Twitter</h4>
                    </div>
                </div>
            </div>
            </div>)
}