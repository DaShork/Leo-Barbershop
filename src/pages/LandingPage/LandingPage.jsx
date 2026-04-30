import Header from '../../layouts/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Introduction from './components/Introduction/Introduction';
import ServiceSection from './components/ServiceSection/ServiceSection';
import RatingSection from './components/RatingSection/RatingSection';
import Footer from '../../layouts/Footer/Footer';
import './LandingPage.css'

function LandingPage() {
    return (
        <div className = 'landing-page'>
            <Header />
            <HeroSection />
            <Introduction />
            <ServiceSection />
            <RatingSection />
            <Footer />

        </div>

    )
}
export default LandingPage