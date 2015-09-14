import t from 'tcomb-form';
import Ingredient from './ingredient.jsx';

module.exports = t.struct({
    id: t.Num,
    name: t.Str,
    servings: t.Str,
    time: t.Str,
    ingredients: t.list(Ingredient),
    directions: t.list(t.Str)
});
