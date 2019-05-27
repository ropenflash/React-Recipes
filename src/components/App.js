import React from 'react'
import Header from './Header'
import RecipeList from './RecipeList'
import RecipeDetail from './RecipeDetail'

//import Logo from '../public/images/logo.png'
 // class App extends React.Component{
     
 //     render(){
         
 //         return(
 //            <h1> Hello World!</h1>
 //             )
         
 //     }
     
 // }
 console.log(process.env.API_URL)
 console.log(API_URL)
 fetch(API_URL+'/v1/recipes')
 .then(res=>{return res.json()})
 .then(json=>console.log(json))
 
 
 const App=()=>(
  <div>
  <Header/>
  <main style={{display:'flex'}}>
  <RecipeList style={{flex:3}}/>
  <RecipeDetail style={{flex:5}}/>
  </main>
  </div>
  )
 
 export default App