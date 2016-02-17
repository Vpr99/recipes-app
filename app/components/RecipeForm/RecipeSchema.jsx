import t from 'tcomb-form';

var Ingredient = t.struct({
    quantity: t.String,
    name: t.String
});

var Recipe = t.struct({
    recipe_name: t.String,
    category: t.String,
    servings: t.String,
    time: t.String,
    ingredients: t.list(Ingredient),
    directions: t.list(t.String)
});

module.exports = Recipe;
