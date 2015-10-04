import React from 'react';

var Recipe = React.createClass({
    render() {
        return (
            <div className="RecipeListItem">
                <p className="RecipeListItem-title">{this.props.data.recipe_name}</p>
            </div>
        );
    }
});

module.exports = Recipe;
