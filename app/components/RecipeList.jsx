import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';

import RecipeListItem from './RecipeListItem.jsx';

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
            <ul>
                {this.data.recipes.map(recipe => (
                    <li className={recipe.objectId} key={recipe.objectId}>
                        <Link to={`/recipe/${recipe.slug}`}><RecipeListItem data={recipe} /></Link>
                    </li>
                ))}
            </ul>
        )
    }
});

module.exports = RecipeList;
