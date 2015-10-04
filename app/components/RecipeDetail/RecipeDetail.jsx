import React from 'react';

import uuid from 'node-uuid';
import fraction from 'fraction.js';

import _ from 'underscore';
import inflection from 'underscore.inflection';
_.mixin(inflection);

let RecipeDetail = React.createClass({
    render() {

        /* Failure State: No Recipe Found. */
        var content = (<div>No Recipe Found.</div>);


        if (this.props.recipeData.length) {
            var recipe = _.findWhere(this.props.recipeData, {slug: this.props.params.recipeSlug});

            /* Process & store recipe steps. */
            var steps = [];
            _.each(recipe  .directions, function(step) {
                steps.push(<li key={uuid.v4()}>{step}</li>)
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

                var quantity = new fraction(ingredient.quantity);
                var fractionQuantity = quantity.toFraction(true);

                /* Add the ingredient to the array */
                ingredients.push(
                    <li key={uuid.v4()}>{fractionQuantity} {ingredient.unit} {ingredient.ingredient_name}{ingredientInstruction}</li>
                )

            })

            content = (
                <div className="RecipeDetail">
                    <h2 className="RecipeDetail-title">{recipe.recipe_name}</h2>
                    <div className="RecipeDetail-meta">
                        <p className="RecipeDetail-servings">Servings: {recipe.servings}</p>
                        <p className="RecipeDetail-time">Time Taken: {recipe.time}</p>
                    </div>
                    <ul className="RecipeDetail-ingredients">{ingredients}</ul>
                    <ul className="RecipeDetail-steps">{steps}</ul>
                </div>
            )
        }

        /*  */
        else {
            content = (
                <div className='loading'>Loading</div>
            )
        }

        return (<div>{content}</div>);
    }
});

module.exports = RecipeDetail;
