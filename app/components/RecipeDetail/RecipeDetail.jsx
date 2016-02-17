import React from 'react';

import Loader from '../Loader/Loader.jsx';

import uuid from 'node-uuid';
import fraction from 'fraction.js';
import _ from 'underscore';
import inflection from 'underscore.inflection';
_.mixin(inflection);

let RecipeDetail = React.createClass({
    render() {
        /* Failure State: No Recipe Found. */
        var content = (<div>No Recipe Found.</div>);

        /* Success State: Render the Recipe! */
        if (this.props.recipeData.length) {
            var recipe = _.findWhere(this.props.recipeData, {slug: this.props.params.recipeSlug});

            /* Process & store recipe steps. */
            var steps = [];
            _.each(recipe  .directions, function(step) {
                steps.push(<li className="RecipeDetail-step" key={uuid.v4()}><p>{step}</p></li>)
            })

            /* Process & store ingredients */
            var ingredients = [];
            _.each(recipe.ingredients, function(ingredient) {
                ingredients.push(
                    <li className="RecipeDetail-ingredient" key={uuid.v4()}><span className="RecipeDetail-ingredient--quantity">{ingredient.quantity}</span> {ingredient.name}</li>
                )
            })

            content = (
                <div className="RecipeDetail">
                    <h1 className="RecipeDetail-title">{recipe.recipe_name}</h1>
                    <div className="RecipeDetail-left">
                        <p className="RecipeDetail-meta RecipeDetail-meta--servings">Servings: {recipe.servings}</p>
                        <p className="RecipeDetail-meta RecipeDetail-meta--time">Time Taken: {recipe.time}</p>
                        <ul className="RecipeDetail-ingredientList">{ingredients}</ul>
                    </div>
                    <ol className="RecipeDetail-stepList">
                        {steps}
                    </ol>
                </div>
            )
        }

        /*  */
        else {
            content = (<Loader />)
        }

        return (
            <div>
                {content}
            </div>
        );
    }
});

module.exports = RecipeDetail;
