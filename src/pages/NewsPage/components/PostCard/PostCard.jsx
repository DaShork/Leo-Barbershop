import { getImage } from '/src/utils/getImage.js';

function PostCard () {
    return (
        <div className = 'post-card'>
            <img src={getImage('/images/model1.jpg')} alt='Leo Barbershop' className='hero-img' />
            

        </div>
        
    )
}

export default PostCard