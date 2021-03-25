
import React, { Fragment } from 'react';
import './style/index.scss';

const Practice = (props) => {
    return <Fragment>
        <div className='container'>
            <div className='item header'>Header</div>
            <div className='item item1'>Item 1</div>
            <div className='item item2'>Item 2</div>
            <div className='item item3'>Item 3</div>
            <div className='item sidebar'>Sidebar</div>
            <div className='item main'>Main</div>
            <div className='item footer'>Footer</div>
        </div>
    </Fragment>;
};

export default Practice
