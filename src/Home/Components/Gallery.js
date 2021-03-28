import React from 'react';


const Gallery = (props) => {
    return <div className='gallery'>
        {[...Array(14)].map((home, i) => {
            return <figure class={`gallery__item gallery__item--${i+1}`}><img src={`img/gal-${i+1}.jpeg`} alt={`Gallery image ${i+1}`} class="gallery__img" /></figure>
        })}
    </div>
}

export default Gallery