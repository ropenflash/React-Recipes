import React from 'react'
import classNames from 'classnames'

const RecipeDetail = ({ recipeDetails, style, className }) =>

    {
        if (!recipeDetails) {
            return (
                <p className={classNames('h3 p2 bg-white italic center',className)} style={style}>
        Please Select a recipe  to see details.
        </p>
            )
        }

        else {
            return (
                <div 
                className={classNames('p2 bg-white',className)}
                style={style}>
    <h2 className='h2'>{recipeDetails.name}</h2>
    <img className='fit'  src={recipeDetails.image}/>
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
