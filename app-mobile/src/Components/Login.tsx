
import React,{useReducer, useEffect} from 'react'

interface AuthState {
  validando:boolean,
  token:string | null,
  username:string | null,
  nombre:string | null,
}

const initialSate:AuthState = {
  validando: true,
  token: null,
  username: '',
  nombre: '',
}

type AuthAction = {
  type: 'login' | 'logout',
}

const authReducer = (state:AuthState, action:AuthAction):AuthState=> {
  switch (action.type) {
    case 'logout':
      return {
        validando: false,
        token: null,
        username: '',
        nombre: '',
      }
    default:
      return state;
  }
}

export const Login = () => {
  
  const [state, dispatch] = useReducer(authReducer, initialSate)

  useEffect(() => {
    setTimeout(() => {
      
      dispatch({type: 'logout'})
  }, 1500);
}, [])


if(state.validando){
  return( 
    <>
      <h3>Login</h3>
      <div className="alert alert-info">
      Validando...</div>
    </>
  )
}
  
  return (
    <>

    <div className="alert alert-danger">
      No autenticado...
    </div>
    <div className="alert alert-success">
      Autenticado
    </div>
    <button className='btn btn-primary'>Login</button>
    <button className='btn btn-danger'>Logout</button>
    </>
  )
}
