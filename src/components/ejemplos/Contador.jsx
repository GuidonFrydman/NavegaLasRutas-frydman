import React from 'react'

const Contador = ({contador, aumentarcontador}) => {
  return (
    <div>
    <p>contador: {contador}</p>
  <button onClick={ aumentarcontador }> + </button>
  </div>
  )
}

export default Contador
