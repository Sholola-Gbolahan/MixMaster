
// useRouterError is a hook which give us access to the error
import { Link, useRouteError } from "react-router-dom"
import img from '../assets/not-found.svg'
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  const error = useRouteError();

  console.log(error)

  if (error.status === 404 ){
    return <Wrapper>
      <div>
         <img src={img}  alt="not found page"/>
         <h3>!ohh</h3>
         <p> We can't seem to find the page you're looking for </p>
         <Link to='/'>Back to home</Link>
      </div>

    </Wrapper>
    
  }
  return (  
    <h1>Error</h1>
  )
}

export default Error