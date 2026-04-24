import Header from '../../layouts/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Introduction from './components/Introduction/Introduction';
import ServiceSection from './components/ServiceSection/ServiceSection';
import RatingSection from './components/RatingSection/RatingSection'
import './LandingPage.css'

function LandingPage() {
    return (
        <div className = 'landing-page'>
            <Header />
            <HeroSection />
            <Introduction />
            <ServiceSection />
            <RatingSection />

        </div>

    )
}
export default LandingPage