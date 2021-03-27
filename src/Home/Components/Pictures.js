import React from 'react';

const data = [
    {
        src : 'img/story-1.jpeg',
        alt : 'Couple with a new house',
        class : 'story__img--1'
    },
    {
        src : 'img/story-2.jpeg',
        alt : 'New House',
        class : 'story__img--2'
    },
]

const Pictures = () => {
    return <div className='story__pictures'>
        {data.map((picture, i) => {
            return <img key={i} src={picture.src} alt={picture.alt} className={picture.class} />
        })}
    </div>
}

export default Pictures