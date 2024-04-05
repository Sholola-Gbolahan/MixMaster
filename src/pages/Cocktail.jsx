import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";
import Wrapper from '../assets/wrappers/CocktailPage'


const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

// Params give the ID result 
export const loader = async ({params}) => {
  
  // grabing id value from params and storing it into a new object namd id
  const {id} = params
// decomposing data from the response
  const {data} = await axios.get(`${singleCocktailUrl}${id}`)


  return {id, data}
}

const Cocktail = () => {
  //  This is used to render the values in the browser
  const {id,data} = useLoaderData() 
  return (
    <h1>Cocktail</h1>
  )
}

export default Cocktail 