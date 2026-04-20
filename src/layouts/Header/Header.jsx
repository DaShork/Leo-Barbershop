import logo from '../../assets/Leo_Barber.png'
import './Header.css'

function Header() {
    return (
        <header className = 'header'>
            <img className ='header-logo' src = {logo} alt = 'Leo Barbershop' />
        </header>
    )
}

export default Header