import React from 'react';
import _ from 'underscore';
import Parse from 'parse';
import ParseReact from 'parse-react';
_.mixin(require('underscore.inflections'));

const Recipe = React.createClass({
    mixins: [ParseReact.Mixin],

    /* Go find the recipe in Parse */
    observe(props, state) {
        return {
            recipe: new Parse.Query('Recipe').equalTo("slug", this.props.params.recipeSlug)
        };
    },

    render() {
        var content = (
            <div>No Recipe Found.</div>
        );

        if (this.data.recipe.length) {
            var recipe = this.data.recipe[0];

            var steps = [];
            _.each(recipe  .directions, function(step) {
                steps.push(<li>{step}</li>)
            })

            /* Process & store the ingredients */
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

                /* Add the ingredient to the array */
                ingredients.push(
                    <li>{ingredient.quantity} {ingredient.unit} {ingredient.ingredient_name}{ingredientInstruction}</li>
                )

            })

            content = (
                <div className="Recipe">
                    <h2 className="Recipe-title">{recipe.recipe_name}</h2>
                    <div className="Recipe-meta">
                        <p className="Recipe-servings">Servings: {recipe.servings}</p>
                        <p className="Recipe-time">Time Taken: {recipe.time}</p>
                    </div>
                    <ul className="Recipe-steps">{steps}</ul>
                    <ul className="Recipe-ingredients">{ingredients}</ul>
                </div>
            )
        }

        else if(this.pendingQueries().length) {
            content = (
                <div className='loading'>Loading</div>
            )
        }

        return (
            <div>
                {content}
            </div>
        );
    }
});

module.exports = Recipe;
