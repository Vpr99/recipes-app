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
                <footer class="footer">
                    <p>A work in progress by <a href="http://ericskram.com/">Eric Skram</a>.</p>
                    <p>Built with <a href="http://parse.com/" target="_blank">Parse</a>,
                        <a href="https://facebook.github.io/react/" target="_blank">React</a> and
                        <a href="https://github.com/postcss/postcss" target="_blank">PostCSS</a>. Source code <a href="https://github.com/Vpr99/recipes-app" target="_blank">on Github</a>.</p>
                </footer>
            </div>
        );
    }
});

module.exports = App;
