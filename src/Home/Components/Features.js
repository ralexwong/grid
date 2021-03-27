import React from 'react';

const data = [
    {
        sprite : 'global',
        title : 'Worlds best luxury homes',
        text : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.'
    },
    {
        sprite : 'trophy',
        title : 'Only the best properties',
        text : 'Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.'
    },
    {
        sprite : 'map-pin',
        title : 'All homes in in top locations',
        text : 'Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.'
    },
    {
        sprite : 'key',
        title : 'New home in one week',
        text : 'Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        sprite : 'presentation',
        title : 'Top 1% realtors',
        text : 'Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.'
    },
    {
        sprite : 'lock',
        title : 'Secure payments on nexter',
        text : 'Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.'
    },

]

const Features = () => {
    return <div className='features'>
        {data.map((feature, i) => {
            return <div className='feature' key={i}>
                <svg className='feature__icon'>
                    <use xlinkHref={`/img/sprite.svg#icon-${feature.sprite}`}></use>
                </svg>
                <h4 className='heading-4 heading-4--dark'>{feature.title}</h4>
                <p className='feature__text'>{feature.text}</p>
            </div>
        })}
    </div>
}

export default Features