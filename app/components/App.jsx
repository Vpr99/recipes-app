import React from 'react';
import { IndexRoute, Router, Route, Link } from 'react-router'

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>Recipe App</h1>
                <Link to="/about">About</Link>
                <Link to="/">Recipes</Link>
                {this.props.children}
            </div>
        );
    }
});

module.exports = App;
