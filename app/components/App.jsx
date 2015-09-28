import React from 'react';
import { IndexRoute, Router, Route, Link } from 'react-router'

import Parse from 'parse';
import ParseReact from 'parse-react';

let App = React.createClass({
    mixins: [ParseReact.Mixin],

    observe(props, state) {
        return {
            recipes: new Parse.Query('Recipe').descending('recipe_name')
        };
    },

    render() {
        return (
            <div>
                <h1>Recipe App</h1>
                <Link to="/recipe/add">Add Recipe</Link>
                <Link to="/about">About</Link>
                <Link to="/">Recipes</Link>
                {React.cloneElement(this.props.children, {recipeData: this.data.recipes })}
            </div>
        );
    }
});

module.exports = App;
