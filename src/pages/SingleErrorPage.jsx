import { useRouteError } from "react-router-dom"

const SingleErrorPage = () => {
    const error = useRouteError();
    console.log(error)

  return (
    <div>{error.message}</div>
  )
}

export default SingleErrorPage