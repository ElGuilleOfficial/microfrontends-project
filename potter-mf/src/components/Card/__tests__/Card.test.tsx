import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../Index';

// No es necesario mockear i18n aquí, ya se hace a nivel global en __mocks__/react-i18next.js

describe('Card Component', () => {
  const mockCharacter = {
    name: 'Harry Potter',
    image: 'harry.jpg',
    gender: 'male',
    species: 'human',
    alive: true
  };

  test('renders character information correctly', () => {
    const { getByText, getByAltText } = render(
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
    const image = getByAltText('Harry Potter');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'harry.jpg');
  });

  test('renders dead status correctly', () => {
    const { getByText } = render(
      <Card {...mockCharacter} alive={false} />
    );

    expect(getByText(/Dead/i)).toBeInTheDocument();
  });
}); 