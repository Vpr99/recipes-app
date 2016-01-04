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
                steps.push(<p className="RecipeDetail-step" key={uuid.v4()}>{step}</p>)
            })

            /* Process & store the ingredients. */
            var ingredients = [];
            _.each(recipe.ingredients, function(ingredient) {

                var ingredientInstruction;

                /* Pluralize ingredients without a unit of measurement */
                if(!ingredient.unit && ingredient.quantity > 1) {
                    ingredient.ingredient_name += "s";
                }
                /* Then pluralize the remaining ingredients. */
                else if(ingredient.quantity > 1) {
                    ingredient.unit = _.pluralize(ingredient.unit);
                }

                /* Check to see if the ingredient has an optional instruction */
                if(ingredient.instruction) {
                    ingredientInstruction = (<span className="Recipe-ingredient--instruction">, {ingredient.instruction}</span>)
                }

                /* Convert the unit quantity to a fraction */
                var quantity = new fraction(ingredient.quantity);
                var fractionQuantity = quantity.toFraction(true);

                /* Add the ingredient to the array */
                ingredients.push(
                    <li className="RecipeDetail-ingredient" key={uuid.v4()}><span className="RecipeDetail-ingredient--quantity">{fractionQuantity} {ingredient.unit}</span> {ingredient.ingredient_name}{ingredientInstruction}</li>
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
                    <div className="RecipeDetail-stepList">
                        {steps}
                    </div>
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
