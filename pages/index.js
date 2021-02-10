import React, { useState, useEffect } from "react";
import Head from "next/head";
import Recipe from "../components/Recipe";
import SortOrder from "../components/SortOrder";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Nut Butter');
  const [sortOrder, setSortOrder] = useState('none');

  useEffect(async () => {
    const res = await fetch(`/api/recipes`);
    
    if(res.status === 200) {
      res.json().then(data => {
        setRecipes(data);
      })
    }
  }, []);

  const handleClick = (e) => {
    alert('todo');
  }

  return (
    <div>
      <Head>
        <title>Super Duper Delicious Recipes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page page--home">
        <h1>Super Duper Delicious Recipes</h1>
        <div className="search">    
            <input className="search__input" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <button className="search__button" onClick={handleClick}>Search</button> 
        </div>
        <SortOrder active={sortOrder}/>
        <div className="recipes">
          {recipes && recipes.length > 0 ? recipes.map(recipe => <Recipe {...recipe} />) : `Sorry to make you hangry, but we couldn't find any recipes for you.`}
        </div>
      </div>
    </div>
  );
};

export default Home;
