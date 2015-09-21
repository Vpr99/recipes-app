import App from './components/App.jsx';
import About from './components/About.jsx';
import RecipeList from './components/RecipeList.jsx';
import Recipe from './components/Recipe.jsx';

const routeConfig = [
  { path: '/',
    component: App,
    indexRoute: { component: RecipeList },
    childRoutes: [
      { path: 'about', component: About },
      { path: 'recipe/:recipeSlug', component: Recipe }
    ]
  }
]

module.exports = routeConfig;
