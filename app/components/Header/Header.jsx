import React from 'react';
import { IndexRoute, Router, Route, Link } from 'react-router'

let Header = () => {
    return (
        <header className="PageHead">
            <Link to="/"><h1 className="PageHead-logo">Recipes</h1></Link>
            {/* <nav className="PageHead-nav">
                <Link to="/recipe/add">Add Recipe</Link>
                <Link to="/">Recipes</Link>
            </nav> */}
        </header>
    )
}

module.exports = Header;
