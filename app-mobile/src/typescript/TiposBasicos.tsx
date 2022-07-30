import React from 'react'

export const TiposBasicos = () => {
  let nombre: string = 'Juan';
  let edad: number = 33;
  let msg: string = '';
  const estaActivo:boolean = true;
  let titulo:String | number = 'Titulo';
  edad === 32 ? msg= ' es un viejo culiao' : msg= ''
  nombre = 'Pedro'

  return (
    <><h3>{titulo}</h3>
    {nombre} tiene {edad} años{msg}, {(estaActivo)? 'activo' : 'no activo'}
    </>
  )
}
