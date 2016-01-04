import React from 'react';
import { IndexRoute, Router, Route, Link } from 'react-router'

var logo = require('./../../images/logo.svg');

let Header = () => {
    return (
        <header className="PageHead">
            <Link to="/"><img className="PageHead-logo" src={logo} alt="Recipes" /></Link>
            <nav className="PageHead-nav">
                <Link to="/about">About</Link>
            </nav>
        </header>
    )
}

module.exports = Header;
