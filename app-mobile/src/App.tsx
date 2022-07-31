import { TiposBasicos } from "./typescript/TiposBasicos";
import { Contador } from "./Components/Contador";
import { Login } from "./Components/Login";
import { ContadorHook } from "./Components/ContadorHook";
import { Usuarios } from "./Components/Usuarios";
import { Formularios } from "./Components/Formularios";
 const App = () => {
  return (
    <div className='mt-2'>
      <h1>My first react app</h1>
      <hr />
      <TiposBasicos/>
      <hr />
      <Contador />
      <hr />
      <ContadorHook />
      <hr />
      <Login />
      <hr />
      <Usuarios/>
      <hr />
      <Formularios/>
    </div>
  )
}

export default App;