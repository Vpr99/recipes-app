import React from 'react';

var Recipe = React.createClass({
    render() {
        return (
            <div className="Recipe">
                <h2 className="Recipe-title">{this.props.data.recipe_name}</h2>
            </div>
        );
    }
});

module.exports = Recipe;
