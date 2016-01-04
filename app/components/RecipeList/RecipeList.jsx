import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';

import RecipeListItem from '../RecipeListItem/RecipeListItem.jsx';

import { IndexRoute, Router, Route, Link } from 'react-router'

let RecipeList = React.createClass({
    mixins: [ParseReact.Mixin],

    observe(props, state) {
        return {
            recipes: new Parse.Query('Recipe').descending('recipe_name')
        };
    },

    render() {
        return(
            <div className="RecipeList">
                {this.data.recipes.map(recipe => (
                        <Link to={`/recipe/${recipe.slug}`} key={recipe.objectId}>
                            <RecipeListItem data={recipe} />
                        </Link>
                ))}
            </div>
        )
    }
});

module.exports = RecipeList;
