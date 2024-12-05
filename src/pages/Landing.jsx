import { useLoaderData } from "react-router-dom"
import axios from "axios"
import CocktailList from "../components/CocktailList"
import SearchForm from "../components/SearchForm"
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

// Grabing the react query Hook
import { useQuery } from "@tanstack/react-query"

// This is used to access request
export const loader = async ({ request }) => {
  // constructing a new URL instance
  // This is coming from javascript
  //  Where are submitting the for and submitting the value to the loader
  // which is attached to the homepage

  const url = new URL(request.url)

  // func to say If there's any value in the search use it and if not then use the empty one
  // This line of code retrieves the value of the search parameter from the
  // query string of the URL. The searchParams property of the URL object
  //  provides a URLSearchParams object, which allows you to access
  // and manipulate the query parameters of the URL.

  //The get() method of the URLSearchParams object retrieves the
  // value of a specific parameter by passing its name as an argument.
  // In this case, 'search' is passed as the parameter name. If the search
  //  parameter exists in the URL's query string, its value will be
  //  assigned to the searchTerm variable. If the search parameter is not
  //  present or its value is empty, the expression '' (an empty string)
  // is assigned to searchTerm using the logical OR operator (||).

  const searchTerm = url.searchParams.get("search") || "vodka"
  const resp = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
  console.log(resp)

  return { drinks: resp.data.drinks, searchTerm }
}

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData()

  console.log(drinks, searchTerm)

  return (
    <>
      {/* Setting a props to update the default value in the search form after it's searched for */}
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  )
}

export default Landing
