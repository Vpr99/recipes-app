import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';

/* Alerts */
import AlertError from '../AlertError/AlertError';
import AlertSuccess from '../AlertSuccess/AlertSuccess';

/* Forms */
import t from 'tcomb-form';
var Form = t.form.Form;
import Recipe from '../RecipeForm/RecipeSchema';
import RecipeForm from '../RecipeForm/RecipeForm';

var RecipeCreator = React.createClass({
    getInitialState: function() {
        return {
            fileData: '',
            success: false,
            error: false,
            message: ''
        };
    },



    /* Real-time validation for form fields */

    // onChange: function(value, path) { this.refs.form.getComponent(path).validate(); },

    render() {
        // <Form ref="form" type={Recipe} options={RecipeForm} />

        var alert;
        if(this.state.success) {
            alert = <AlertSuccess message={this.state.message} />;
        }
        else if(this.state.error) {
            alert = <AlertError message={this.state.message} />;
        }

        return (
            <div>
                <div>{alert}</div>
                <form className="RecipeCreator RecipeCreator--inline" onSubmit={this.addRecipe}>
                    <Form ref="form" type={Recipe} options={RecipeForm} />
                    <input type="submit" value="Save" />
                </form>
            </div>
        );
    },

    addRecipe: function(e) {
        e.preventDefault();
        var value = this.refs.form.getValue();

        if (!value) {
            this.setState({
                error: true,
                message: "Error."

            });
        }
        else {
            this.setState({
                success: true,
                message: "Success!"
            });

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
