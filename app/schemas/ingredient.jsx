import t from 'tcomb-form';

module.exports = t.struct({
    quantity: t.Num,
    unit: t.maybe(t.Str),
    ingredient_name: t.Str,
    instruction: t.maybe(t.Str)
});
