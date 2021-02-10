import recipes from './recipes.json';

export default (req, res) => {
    if(req.query?.search) {
      res.statusCode = 200;
      res.json(recipes.filter((recipe) => recipe.title.startsWith(req.query.search)));
    }
    else {
      res.statusCode = 200
      res.json(recipes);
    }
  }
  