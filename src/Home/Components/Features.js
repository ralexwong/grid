import React from 'react';

const data = [
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
]

const Features = (props) => {
    return <div className='features'>
        {[...Array(6)].map((feature, i) => {
            return <div className='feature' key={i}>
                <svg className='feature__icon'>
                    <use xlinkHref='/img/sprite.svg#icon-global'></use>
                </svg>
                <h4 className='heading-4'>World's Best Luxury Homes</h4>
                <p className='feature__text'>Lorem, ipsum dolor sit amet consectuetur 
                adipisiing elit. Tentur districio necessitatibus partiturt voluptatibus.
                </p>
            </div>
        })}
    </div>
}

export default Features