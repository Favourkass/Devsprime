import { Redirect, Route } from "react-router-dom"


const ProtectedRoute = ({component: Component, ...rest}) => {
  const token = localStorage.getItem('token') 
  return (
    <Route {...rest} render={props => ( 
      !token ? (<Redirect to='/login'/>): (
        <Component {...props}/>
      )
    )}
    />
  )
}

export default ProtectedRoute