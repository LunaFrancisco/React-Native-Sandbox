import { TiposBasicos } from "./typescript/TiposBasicos";
import { Contador } from "./Components/Contador";
import { Login } from "./Components/Login";
import { ContadorHook } from "./Components/ContadorHook";
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

    </div>
  )
}

export default App;