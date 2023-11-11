import '../components/Hero';
import '../components/Specials'
import '../components/Testimonials'
import '../components/About'
import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import About from '../components/About';

export default function HomePage(){
    return(
        <>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
        </>
    )
}