import React, {useEffect } from 'react'

function Lista(props) {
  useEffect(() => {
    // montando lista eles estao sendo chamado de novo
    //ai ele limpa com o clean up 
    return () => {
      console.log('limpou item')
    }
  }, [])
  return (
    <pre>
      {props.nome}
    </pre>
  )
}

export default Lista
