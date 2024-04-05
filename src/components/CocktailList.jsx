import Wrapper from '../assets/wrappers/CocktailList'
import CocktailCard from './CocktailCard'

const CocktailList = ( {drinks} ) => {

    //  This condition will run in a single page error when there are no data of drinks available
    if(!drinks){
        return <h4 style={{textAlign:'center'}}>No matching Cocktail Found</h4>
    }



    // Ilterate over the list to pull out he neccessary info
    const formattedDrinks = drinks.map((item) => {

        // Pulling out required info and returning a new object
        const {idDrink,strDrink,strDrinkThumb,strAlcoholic, strGlass} = item

        // returning New Object
        return {id:idDrink,name:strDrink, image:strDrinkThumb,info:strAlcoholic, glass:strGlass}

    })

    // This will run when there are data of drinks available

  return (
   <Wrapper>
        {formattedDrinks.map((item) => {
            // Passing all item properties down to Card using ...item
          return < CocktailCard key={item.id} {...item} />
        })}
   </Wrapper>
  )
}

export default CocktailList