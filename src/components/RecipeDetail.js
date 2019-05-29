import React from 'react'

const RecipeDetail = ({ recipeDetails, style }) =>

    {
        if (!recipeDetails) {
            return (
                <p style={style}>
        Please Select recipe 
        </p>
            )
        }

        else {
            return (
                <div style={style}>
    <h2>{recipeDetails.name}</h2>
    <img height='200px' src={recipeDetails.image}/>
    <div>
    <span> {recipeDetails.category} </span>
     <span>{recipeDetails.calories} </span>
    </div>
    <h3>Ingredients</h3>
    <ul>{
    recipeDetails.ingredients.map((ingredient)=><li key={ingredient}>{ingredient}</li>)
    }
    </ul>
    <h3>Steps</h3>
    <ol>
     {
    recipeDetails.steps.map((step)=><li key={step}>{step}</li>)
    } 
 
    </ol>
    </div>
            )
        }

    }


export default RecipeDetail
