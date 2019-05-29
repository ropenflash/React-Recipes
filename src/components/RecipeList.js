import React from 'react'

const RecipeList = ({ recipes, style, onClick }) => {

    return (
        <div style={style}>
    <h2 className='h2'>Recipes</h2>
    <ul className='list-reset'>
    {recipes.map(recipe=>(
    <li  className='py2 border-bottom border-bottom-dashed'
    key={recipe.id} 
        style={{cursor:'pointer'}} 
        onClick={()=>{onClick(recipe.id)}}>
    <span>{recipe.name}</span>
    <span>{recipe.category}</span>
    </li>
    ))}
    </ul>
    </div>)
}


export default RecipeList
