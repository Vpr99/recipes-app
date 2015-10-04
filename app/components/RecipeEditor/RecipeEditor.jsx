import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';

import _ from 'underscore';

/* Forms */
import t from 'tcomb-form';
var Form = t.form.Form;
import Recipe from '../../schemas/recipe.jsx';
import RecipeForm from '../../forms/RecipeForm.jsx';

let RecipeEditor = React.createClass({
    render() {
        var content = (
            <div>No Recipe Found.</div>
        );

        if (this.props.recipeData.length) {
            var recipe = _.findWhere(this.props.recipeData, {slug: this.props.params.recipeSlug});

            content = (
                <form className="RecipeCreator RecipeCreator--inline" onSubmit={this.addRecipe}>
                    <Form ref="form" value={recipe} type={Recipe} />
                    <input type="submit" value="Update Recipe" />
                </form>
            )
        }

        else {
            content = (
                <div className='loading'>Loading...</div>
            )
        }
        // <Form ref="form" type={Recipe} options={RecipeForm} />
        return (
            <div>
                {content}
            </div>
        );
    },

    addRecipe: function(e) {
        var value = this.refs.form.getValue();
        e.preventDefault();

        if (!value) { console.log("Failed."); }
        else {
            ParseReact.Mutation.Set(this.data.recipe[0], {
                recipe_name: value['recipe_name'],
                slug: value['slug'],
                servings: value['servings'],
                time: value['time'],
                ingredients: value['ingredients'],
                directions: value['directions']
            }).dispatch();

            console.log("Succeeded.");

            /* Empties the form */
            // this.setState({value: null});
        }
    }
});

module.exports = RecipeEditor;
