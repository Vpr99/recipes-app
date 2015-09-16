import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';

/* Forms */
import t from 'tcomb-form';
var Form = t.form.Form;
import Recipe from '../schemas/recipe.jsx';
import RecipeForm from '../forms/RecipeForm.jsx';

var RecipeCreator = React.createClass({
    getInitialState: function() {
        return {
            fileData: ''
        };
    },

    render() {
        // <Form ref="form" type={Recipe} options={RecipeForm} />
        return (
            <div>
                <form className="RecipeCreator RecipeCreator--inline" onSubmit={this.addRecipe}>
                    <Form ref="form" type={Recipe} />
                    <input type="submit" value="Save" />
                </form>
            </div>
        );
    },

    addRecipe: function(e) {
        e.preventDefault();

        var value = this.refs.form.getValue();

        ParseReact.Mutation.Create('Recipe', {
            recipe_name: value['recipe_name'],
            servings: value['servings'],
            time: value['time'],
            ingredients: value['ingredients'],
            directions: value['directions']
        }).dispatch();
    }
});

module.exports = RecipeCreator;
