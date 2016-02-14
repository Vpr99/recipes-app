import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';

/* Forms */
import t from 'tcomb-form';
var Form = t.form.Form;
import Recipe from '../RecipeForm/RecipeSchema';
import RecipeForm from '../RecipeForm/RecipeForm';

var RecipeCreator = React.createClass({
    getInitialState: function() {
        return {
            fileData: ''
        };
    },

    /* Real-time validation for form fields */

    // onChange: function(value, path) { this.refs.form.getComponent(path).validate(); },

    render() {
        // <Form ref="form" type={Recipe} options={RecipeForm} />

        return (
            <div>
                <form className="RecipeCreator RecipeCreator--inline" onSubmit={this.addRecipe}>
                    <Form ref="form" type={Recipe} options={RecipeForm} />
                    <input type="submit" value="Save" />
                </form>
            </div>
        );
    },

    addRecipe: function(e) {
        var value = this.refs.form.getValue();
        e.preventDefault();

        if (!value) { console.log("Failed."); }
        else {
            console.log("Succeeded.");
            //console.log(value);
            // ParseReact.Mutation.Create('Recipe2', {
            //     recipe_name: value['recipe_name'],
            //     category: value['category'],
            //     slug: value['recipe_name'].toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-'),
            //     servings: value['servings'],
            //     time: value['time'],
            //     ingredients: value['ingredients'],
            //     directions: value['directions']
            // }).dispatch();



            /* Empties the form */
            // this.setState({value: null});
        }
    }
});

module.exports = RecipeCreator;
