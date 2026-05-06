import { getImage } from '/src/utils/getImage.js';

function PostCard () {
    return (
        <img src={getImage('/images/model1.jpg')} alt='Leo Barbershop' className='hero-img' />
        
    )
}

export default PostCard