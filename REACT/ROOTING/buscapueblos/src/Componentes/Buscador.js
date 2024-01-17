import React from 'react'

export default function Buscador (props) {
  return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type='text' placeholder='Busque un pueblo' name='buscador' onChange={props.funcion} />
            </form>
        </div>
  )
}
