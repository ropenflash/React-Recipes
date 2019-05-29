import React from 'react';
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      recipeDetails: null,
    };
  }
  componentDidMount() {
    fetch('https://reactrecipes.herokuapp.com/v1/recipes')
      .then(res => res.json())
      .then(recipes => {
        this.setState({ recipes });
      });
  }

  onRecipeClick = id => {
    fetch(`https://reactrecipes.herokuapp.com/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipeDetails => {
        this.setState({ recipeDetails });
      });
  };

  render() {
    const { recipes, recipeDetails } = this.state;

    return (
      <div>
        <Header />
        <main className="px4 flex">
          <RecipeList
            recipes={recipes}
            onClick={this.onRecipeClick}
            style={{ flex: 3 }}
          />
          <RecipeDetail
            className="ml4"
            recipeDetails={recipeDetails}
            style={{ flex: 5 }}
          />
        </main>
      </div>
    );
  }
}

export default App;
