import React from 'react';

/* Forms */
import t from 'tcomb-form';
var Form = t.form.Form;
import Recipe from '../schemas/recipe.jsx';
import RecipeForm from '../forms/RecipeForm.jsx';

var RecipeCreator = React.createClass({
    render() {
        // <Form ref="form" type={Recipe} options={RecipeForm} />
        return (
            <div>
                <form className="RecipeCreator RecipeCreator--inline">
                    <Form ref="form" type={Recipe} />
                    <input type="submit" value="Save" />
                </form>
            </div>
        );
    }
});

module.exports = RecipeCreator;
