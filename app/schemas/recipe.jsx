import t from 'tcomb-form';
import Ingredient from './ingredient.jsx';

module.exports = t.struct({
    recipe_name: t.Str,
    slug: t.Str,
    category: t.Str,
    servings: t.Str,
    time: t.Str,
    ingredients: t.list(Ingredient),
    directions: t.list(t.Str)
});
