import React from 'react';
import ReactDOM from 'react-dom';

import Recipe from './Recipe.jsx';
import RecipeCreator from './RecipeCreator.jsx';

import RecipeData from '../data/RecipeData.jsx';

var App = React.createClass({
    render() {
        return (
            <div>
                <ul>{RecipeData.map(this.renderRecipe)}</ul>
                <RecipeCreator />
            </div>

        );
    },

    renderRecipe(recipe) {
        return(
            <li key={recipe.id}>
                <Recipe data={recipe} />
            </li>
        )
    }
});

module.exports = App;
