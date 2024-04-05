
// useRouterError is a hook which give us access to the error
import { Link, useRouteError } from "react-router-dom"
import img from '../assets/not-found.svg'
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  const error = useRouteError();
// located the error status from the useRouterError component
  console.log(error)


  // This only display if the error status is 404.
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
    <h1>Somthing went wrong....</h1>
  )
}

export default Error