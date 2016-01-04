import React from 'react';

var Recipe = React.createClass({
    render() {
        console.log(this.props.data);
        console.log(this.props.data.createdAt);
        return (
            <div className="RecipeListItem">
                <p className="RecipeListItem-title">{this.props.data.recipe_name}</p>
            </div>
        );
    }
});

module.exports = Recipe;
