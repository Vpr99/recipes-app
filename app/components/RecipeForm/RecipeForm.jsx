import React from 'react';
import t from 'tcomb-form/lib';
import i18n from 'tcomb-form/lib/i18n/en';
import semantic from 'tcomb-form/lib/templates/semantic';
import Recipe from './RecipeSchema';

/* Declare some global settings for TComb */
t.form.Form.i18n = i18n;
t.form.Form.templates = semantic;

/* Global Form Structure */
var struct = function(locals) {
    if (locals.config.type === "ingredients") return ingredients(locals);
    var inputs = locals.inputs;

    return (
        <fieldset className="RecipeForm">
            <div className="RecipeForm-name">{inputs.recipe_name}</div>
            <div className="RecipeForm-category">{inputs.category}</div>
            <div className="RecipeForm-servings">{inputs.servings}</div>
            <div className="RecipeForm-time">{inputs.time}</div>
            <div className="RecipeForm-ingredients">
                <p className="RecipeForm-sectionTitle">Ingredients</p>
                {inputs.ingredients}
            </div>
            <div className="RecipeForm-directions">
                <p className="RecipeForm-sectionTitle">Directions</p>
                {inputs.directions}
            </div>
        </fieldset>
    );
};

/* Structure for the default List object */
var list = function(locals) {
    return (
        <fieldset className="FormList">
            {
                locals.items.map(function(item) {
                    return (
                        <div className="FormList-item" key={item.key}>
                            {item.input}
                            <div className="FormList-controls">
                                {item.buttons.map(function(btn) {
                                    return (
                                        <button key={btn.label} onClick={btn.click}>X</button>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })
            }
            <button className="FormList-add" onClick={locals.add.click}>{locals.add.label}</button>
        </fieldset>
    );
};

/* Override default inputs to add pretty class names */
const textbox = t.form.Form.templates.textbox.clone({
    // renderInput: (locals) => {
    //     console.log(locals);
    //     return <input id={locals.attrs.id} name={locals.attrs.name} type="text" className="Input-textbox form-control" value={locals.value} />
    // },
    renderLabel: (locals) => {
        return <label className="Input-label" htmlFor={locals.attrs.id}>{locals.label}</label>
    }
});

/* Overridden structure for Ingredients */
const ingredients = function(locals) {
    var inputs = locals.inputs;
    return (
        <fieldset className="FormIngredient">
            <div className="FormIngredient-quantity">{inputs.quantity}</div>
            <div className="FormIngredient-name">{inputs.name}</div>
        </fieldset>
    );
};

module.exports = {
    // auto: 'placeholders',
    templates: {
        list: list,
        struct: struct,
        textbox: textbox
    },
    fields: {
        directions: {
            disableOrder: true
        },
        ingredients: {
            disableOrder: true,
            item: { template: ingredients }
        }
    }
};
