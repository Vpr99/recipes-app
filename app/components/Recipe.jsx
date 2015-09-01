import React from 'react';
import _ from 'underscore';
_.mixin(require('underscore.inflections'));

export default class Recipe extends React.Component {
    render() {
        var steps = [];
        _.each(this.props.data.steps, function(step) {
            steps.push(<li>{step}</li>)
        })

        /* Process & store the ingredients */
        var ingredients = [];
        _.each(this.props.data.ingredients, function(ingredient) {

            var ingredientInstruction;

            /* Pluralize ingredients without a unit of measurement */
            if(!ingredient.unit && ingredient.quantity > 1) {
                ingredient.name += "s";
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
                <li>{ingredient.quantity} {ingredient.unit} {ingredient.name}{ingredientInstruction}</li>
            )

        })

        return (
            <div className="Recipe">
                <h2 className="Recipe-title">{this.props.data.title}</h2>
                <div className="Recipe-meta">
                    <p className="Recipe-servings">Servings: {this.props.data.servings}</p>
                    <p className="Recipe-time">Time Taken: {this.props.data.time}</p>
                </div>
                <ul className="Recipe-steps">{steps}</ul>
                <ul className="Recipe-ingredients">{ingredients}</ul>
            </div>
        );
    }
}
