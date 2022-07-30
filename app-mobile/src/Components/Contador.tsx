import React, { useState } from "react"

export const Contador = () => {
  const [valor, setValor] = useState(0);
  
  // if valor less tan 0, setValor to 0
  if (valor < 0) {
    setValor(0);
  }
  const acumular = (numero:number) => {
  
    setValor(valor + numero);

  }
  

  return (
    <>
  
    <h3>contador</h3><small >{valor}</small>
    <div>
    <button className="btn btn-primary" onClick={() => acumular(1)}>+</button>
    &nbsp;
    <button className="btn btn-primary" onClick={() => acumular(-1)}>-</button>
    </div>

    </>

  )
}
