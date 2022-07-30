import { useCounter } from "../hooks/useCounter";

export const ContadorHook = () => {

  const {valor, acumular} = useCounter(100);

  return (
    <>
      <h3>Contador con Hook</h3><small >{valor}</small>
      <div>
        <button className="btn btn-primary" onClick={() => acumular(1)}>+</button>
        &nbsp;
        <button className="btn btn-primary" onClick={() => acumular(-1)}>-</button>
      </div>

    </>

  )
}
