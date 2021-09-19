import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "df8d865e";
  const APP_KEY = "0108dde7dfc2a7949687aa2bd86383da";
  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipies(data.hits);
    // console.log(data.hits);
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Search Your Favourite Food</h1>
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          ></input>
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="recepi_section">
        {recipies.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
