import React from 'react';

const Header = (props) => {
    return <header className='header'>
        <img src="img/logo.png" alt="Nexter logo" class="header__logo" />
        <h3 class="heading-3">Your own home:</h3>
        <h1 class="heading-1">The ultimate personal freedom</h1>
        <button class="btn header__btn">View our properties</button>
        <div class="header__seenon-text">Seen on</div>
        <div class="header__seenon-logos">
            <img src="img/logo-bbc.png" alt="Seen on logo 1" />
            <img src="img/logo-forbes.png" alt="Seen on logo 2" />
            <img src="img/logo-techcrunch.png" alt="Seen on logo 3" />
            <img src="img/logo-bi.png" alt="Seen on logo 4" />
        </div>
    </header>
}

export default Header