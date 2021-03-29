import React from 'react';

const data = [
    {
        text : 'Find your dream home'
    },
    {
        text : 'Request proposal'
    },
    {
        text : 'Download home planner'
    },
    {
        text : 'Contact us'
    },
    {
        text : 'Submit your property'
    },
    {
        text : 'Come work with us!'
    },

]

const Footer = (props) => {
    return <div className='footer'>
        <ul className='nav'>
            {data.map((line, i) => {
                return <li key={i} className='nav__item'><a href='#' className='nav__link'>{line.text}</a></li>
            })}
        </ul>
        <p className='copyright'>
        &copy; Copyright 2017 by Jonas Schmedtmann. Feel free to use this project for your own purposes. This does NOT apply if you plan to produce your own course or tutorials based on this project.
        </p>
    </div>
}

export default Footer