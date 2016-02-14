import t from 'tcomb-form';

var Ingredient = t.struct({
    quantity: t.Str,
    name: t.Str
});

var Recipe = t.struct({
    recipe_name: t.Str,
    category: t.Str,
    servings: t.Str,
    time: t.Str,
    ingredients: t.list(Ingredient),
    directions: t.list(t.Str)
});

module.exports = Recipe;
