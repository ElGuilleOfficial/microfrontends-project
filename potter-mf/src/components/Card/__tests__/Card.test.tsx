import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../Index';
import { Character } from '../../../types/character';

// No es necesario mockear i18n aquí, ya se hace a nivel global en __mocks__/react-i18next.js

describe('Card Component', () => {
  const mockCharacter: Character = {
    name: 'Harry Potter',
    image: 'harry.jpg',
    gender: 'male',
    species: 'human',
    alive: true
  };

  test('renders character information correctly', (): void => {
    const { getByText, getByAltText }: RenderResult = render(
      <Card {...mockCharacter} />
    );

    // Verificar que el nombre del personaje se muestra
    expect(getByText(/Harry Potter/i)).toBeInTheDocument();

    // Verificar que el estado (vivo/muerto) se muestra correctamente
    expect(getByText(/Alive/i)).toBeInTheDocument();

    // Verificar que el género se muestra correctamente
    expect(getByText(/Gender: Male/i)).toBeInTheDocument();

    // Verificar que la especie se muestra correctamente
    expect(getByText(/Species: Human/i)).toBeInTheDocument();

    // Verificar que la imagen tiene el alt correcto
    const image: HTMLImageElement = getByAltText('Harry Potter') as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'harry.jpg');
  });

  test('renders dead status correctly', (): void => {
    const { getByText }: RenderResult = render(
      <Card {...mockCharacter} alive={false} />
    );

    expect(getByText(/Dead/i)).toBeInTheDocument();
  });
}); 