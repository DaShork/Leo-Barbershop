import { getImage } from '/src/utils/getImage.js';

function Introduction() {
    return (
        <div className = 'intro-container'>
            <h2>Welcome to Our Barbershop</h2>
            <p>We are a team of professional barbers dedicated to providing the best grooming experience for our clients.</p>
            <img src={getImage('/images/model1.jpg')} alt='Leo Barbershop' className='intro-img'/>
            <img src={getImage('/images/model2.jpg')} alt='Leo Barbershop' className='intro-img'/>
        </div>
    )
}

export default Introduction