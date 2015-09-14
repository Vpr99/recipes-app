import t from 'tcomb-form';

module.exports = t.struct({
    quantity: t.Num,
    unit: t.maybe(t.Str),
    name: t.Str,
    instruction: t.Str
});
