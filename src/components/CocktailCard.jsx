import { Link, useOutletContext } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailCard";

const CocktailCard = ({id, image, name, info, glass}) => {

  // useOutletContext is used to give access to global values in all the cards
  const data = useOutletContext();
  console.log(data);


  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>

      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        {/* The Id is making the Link goto Cocktail page that displays each details of drinks on a single page */}
        <Link to={`/cocktail/${id}`} className="btn">
          Details
        </Link>
      </div>
    </Wrapper>
  );
};



export default CocktailCard;
