import recipes from './recipes.json';

export default (req, res) => {
    res.statusCode = 200
    res.json(recipes);
  }
  