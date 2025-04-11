import React from 'react'
import { Options } from '../../../types/options'

const Body: React.FC = () => {
  const handleLoad = (option: Options): void => {
    // Esta es una versión simulada que no intenta cargar módulos federados
    console.log('Mock handleLoad called with option:', option)
  }

  return (
    <>
      <div>
        <h2>description</h2>
        <div>
          <button onClick={(): void => handleLoad(Options.rick)}>buttonRick</button>
          <button onClick={(): void => handleLoad(Options.hp)}>buttonHP</button>
        </div>
      </div>
    </>
  )
}

export default Body 