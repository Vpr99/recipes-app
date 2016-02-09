import React from 'react';
import { IndexRoute, Router, Route } from 'react-router'

import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';

import Parse from 'parse';
import ParseReact from 'parse-react';

let App = React.createClass({
    mixins: [ParseReact.Mixin],

    observe(props, state) {
        return {
            recipes: new Parse.Query('Recipe2').descending('recipe_name')
        };
    },

    render() {
        return (
            <div className="container">
                <Header />
                <div className="GridWrapper">
                    {React.cloneElement(this.props.children, {recipeData: this.data.recipes })}
                    <Footer />
                </div>
            </div>
        );
    }
});

module.exports = App;
