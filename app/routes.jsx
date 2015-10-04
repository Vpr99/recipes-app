import App from './components/App.jsx';
import RecipeDetail from './components/RecipeDetail/RecipeDetail.jsx';
import RecipeCreator from './components/RecipeCreator/RecipeCreator.jsx';
import RecipeEditor from './components/RecipeEditor/RecipeEditor.jsx';
import RecipeList from './components/RecipeList/RecipeList.jsx';


let routeConfig = [
  { path: '/',
    component: App,
    indexRoute: { component: RecipeList },
    childRoutes: [
      { path: 'recipe/add', component: RecipeCreator },
      { path: 'recipe/:recipeSlug', component: RecipeDetail },
      { path: 'recipe/:recipeSlug/edit', component: RecipeEditor }
    ]
  }
]

module.exports = routeConfig;
