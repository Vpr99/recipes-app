import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
var ParseComponent = ParseReact.Component(React);

import Recipe from './Recipe.jsx';
import RecipeCreator from './RecipeCreator.jsx';

var App = React.createClass({
    mixins: [ParseReact.Mixin],

    observe(props, state) {
        return {
            items: new Parse.Query('Recipe').descending('recipe_name')
        };
    },

    render() {
        return (
            <div>
                <ul>{this.data.items.map(this.renderRecipe)}</ul>
                <RecipeCreator />
            </div>
        );
    },

    renderRecipe(recipe) {
        return(
            <li key={recipe.objectId}>
                <Recipe data={recipe} />
            </li>
        )
    }
});

module.exports = App;
