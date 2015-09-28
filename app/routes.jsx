import App from './components/App.jsx';
import About from './components/About.jsx';
import Recipe from './components/Recipe.jsx';
import RecipeCreator from './components/RecipeCreator.jsx';
import RecipeEditor from './components/RecipeEditor.jsx';
import RecipeList from './components/RecipeList.jsx';


let routeConfig = [
  { path: '/',
    component: App,
    indexRoute: { component: RecipeList },
    childRoutes: [
      { path: 'about', component: About },
      { path: 'recipe/add', component: RecipeCreator },
      { path: 'recipe/:recipeSlug', component: Recipe },
      { path: 'recipe/:recipeSlug/edit', component: RecipeEditor }
    ]
  }
]

module.exports = routeConfig;
