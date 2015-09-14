import React from 'react';
// import t from 'tcomb-form';

var t = require('tcomb-form');
var Form = t.form.Form;

// var Form = t.form.Form;
var Person = t.struct({
  name: t.Str,
  surname: t.Str
});
    // RecipeSchema = require("../schemas/recipe.jsx"),
    // RecipeForm = require("../forms/recipe_form.jsx");

export default class RecipeFormWrapper extends React.Component {
    render() {
        return (
          <div>
            <Form
              ref="form"
              type={Person}
            />
            <button onClick={this.save}>Save</button>
          </div>
        );
    }
}
