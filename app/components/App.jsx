import React from 'react';
import ReactDOM from 'react/lib/ReactDOM';
import t from 'tcomb-form';

var Form = t.form.Form;
var Person = t.struct({
    name: t.Str,
    surname: t.Str
});

export default class App extends React.Component {
    save() {
        // call getValue() to get the values of the form
        var value = this.refs.form.getValue();
        // if validation fails, value will be null
        if (value) {
            // value here is an instance of Person
            console.log(value);
        }
    }

    render() {
        return(
            <div>
                <Form ref="form" type={Person} />
                <button onClick={this.save}>Save</button>
            </div>
        )
    }
}








// import uuid from 'node-uuid';
// import React from 'react';
// import Recipe from './Recipe.jsx';
// import RecipeFormWrapper from './RecipeForm.jsx';
//
// const recipes = [
//     {
//         "id":"1",
//         "title":"Spanish Rice",
//         "servings":"4-6",
//         "time":"30 minutes",
//         "ingredients": [
//             {
//                 "quantity":"2",
//                 "unit":"tbs",
//                 "name":"Olive Oil",
//                 "instruction":""
//             },
//             {
//                 "quantity":"3",
//                 "unit":"",
//                 "name":"Onion",
//                 "instruction":"Finely Chopped"
//             },
//             {
//                 "quantity":"1",
//                 "unit":"",
//                 "name":"Clove",
//                 "instruction":"Minced"
//             },
//             {
//                 "quantity":"2",
//                 "unit":"pound",
//                 "name":"White Jasmine Rice",
//                 "instruction":"Rinsed"
//             }
//         ],
//         "steps": [
//             "Heat olive oil in large skillet on medium/high heat.",
//             "Add the rice and cook, stirring often, until much of the rice has browned.",
//             "Add the onion and cook, stirring frequently another 3 minutes, until the onions begin to soften.",
//             "Add the garlic and cook until the onions are translucent and softened, about a minute more."
//         ]
//     },
//     {
//         "id":"2",
//         "title":"German Rice",
//         "servings":"4-6",
//         "time":"30 minutes",
//         "ingredients": [
//             {
//                 "quantity":"2",
//                 "unit":"tbs",
//                 "name":"Olive Oil",
//                 "instruction":""
//             },
//             {
//                 "quantity":"12",
//                 "unit":"",
//                 "name":"Onion",
//                 "instruction":"Finely Chopped"
//             },
//             {
//                 "quantity":"1",
//                 "unit":"",
//                 "name":"Clove",
//                 "instruction":"Minced"
//             },
//             {
//                 "quantity":"2",
//                 "unit":"Cups",
//                 "name":"White Jasmine Rice",
//                 "instruction":"Rinsed"
//             }
//         ],
//         "steps": [
//             "Heat olive oil in large skillet on medium/high heat.",
//             "Add the rice and cook, stirring often, until much of the rice has browned.",
//             "Add the onion and cook, stirring frequently another 3 minutes, until the onions begin to soften.",
//             "Add the garlic and cook until the onions are translucent and softened, about a minute more."
//         ]
//     }
// ];
//
// export default class App extends React.Component {
//     render() {
//         return(
//             <div>
//                 <ul>{recipes.map(this.renderRecipe)}</ul>
//             </div>
//         )
//     }
//     renderRecipe(recipe) {
//         return(
//             <li key={recipe.id}>
//                 <Recipe data={recipe} />
//             </li>
//         )
//     }
// }
