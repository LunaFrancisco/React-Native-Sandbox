import { useState } from 'react'

export const useCounter = (inicial: number = 1) => {
  const [valor, setValor] = useState(inicial);

  if (valor < 0) {
    setValor(0);
  }

  
  const acumular = (numero: number) => {
    setValor(valor + numero);
  }
  return{
    valor,
    acumular
  }
}
