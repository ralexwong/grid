
import React, { Fragment } from 'react';

import Content from './Components/Content.js';
import Features from './Components/Features.js';
import Footer from './Components/Footer.js';
import Gallery from './Components/Gallery.js';
import Header from './Components/Header.js';
import Homes from './Components/Homes.js';
import Pictures from './Components/Pictures.js'
import Realtors from './Components/Realtors.js';
import Sidebar from './Components/Sidebar.js';

const Home = (props) => {
    return <div className='container'>
        <Sidebar />
        <Header />
        <Realtors />
        <Features />
        <Pictures />
        <Content />
        <Homes />
        <Gallery />
        <Footer /> 
    </div >;
};

export default Home
