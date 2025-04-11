import React from 'react'
import { Options } from '../../../types/options'

const Body: React.FC = () => {
  const handleLoad = (option: Options) => {
    // Esta es una versión simulada que no intenta cargar módulos federados
    console.log('Mock handleLoad called with option:', option)
  }

  return (
    <>
      <div>
        <h2>description</h2>
        <div>
          <button onClick={() => handleLoad(Options.rick)}>buttonRick</button>
          <button onClick={() => handleLoad(Options.hp)}>buttonHP</button>
        </div>
      </div>
    </>
  )
}

export default Body 