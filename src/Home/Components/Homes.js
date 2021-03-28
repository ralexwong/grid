import React from 'react';

const data = [
    {
        title : 'Beautiful Family House',
        location : 'USA',
        rooms : '5 rooms',
        areas : '325',
        price : '$1,200,000'
    },
    {
        title : 'Modern Glass Villa',
        location : 'Canada',
        rooms : '6 rooms',
        areas : '450',
        price : '$2,750,000'
    },
    {
        title : 'Cozy Country House',
        location : 'UK',
        rooms : '4 rooms',
        areas : '250',
        price : '$850,000'
    },
    {
        title : 'Large Rustical Villa',
        location : 'Portugal',
        rooms : '6 rooms',
        areas : '480',
        price : '$1,950,000'
    },
    {
        title : 'Majestic Palace House',
        location : 'Germany',
        rooms : '18 rooms',
        areas : '4230',
        price : '$9,500,000'
    },
    {
        title : 'Modern Family Apartment',
        location : 'Italy',
        rooms : '3 rooms',
        areas : '180',
        price : '$600,000'
    },

]
const Homes = () => {
    return <div className='homes'>
        {data.map((home, i) => {
            return <div key={i} className='home'>
                <img src={`./img/house-${i+1}.jpeg`} alt={`house${i+1}`} className='home__img' />
                <svg className='home__like'>
                    <use xlinkHref='./img/sprite.svg#icon-heart-full'></use>
                </svg>
                <h5 className='home__name'>{home.title}</h5>
                <div className='home__location'>
                    <svg>
                        <use xlinkHref='./img/sprite.svg#icon-map-pin'></use>
                    </svg>
                    <p>{home.location}</p>
                </div>
                <div className='home__rooms'>
                    <svg>
                        <use xlinkHref='./img/sprite.svg#icon-profile-male'></use>
                    </svg>
                    <p>{home.rooms}</p>
                </div>
                <div className='home__areas'>
                    <svg>
                        <use xlinkHref='./img/sprite.svg#icon-expand'></use>
                    </svg>
                    <p>{home.areas} m<sup>2</sup></p>
                </div>
                <div className='home__price'>
                    <svg>
                        <use xlinkHref='./img/sprite.svg#icon-key'></use>
                    </svg>
                    <p>{home.price}</p>
                </div>
                <button className='btn home__btn'>Contact Realtor</button>


            </div>
        })}
    </div>
}

export default Homes