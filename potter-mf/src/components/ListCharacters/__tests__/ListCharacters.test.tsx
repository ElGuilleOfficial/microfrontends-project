import React from 'react';
import { render, act, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListCharacters from '../Index';
import { fetchCharacters } from '../../../services/api/characters';
import { Character } from '../../../types/character';

// No es necesario mockear i18n aquí, ya se hace a nivel global en __mocks__/react-i18next.js

// Mock del servicio de API
jest.mock('../../../services/api/characters');

describe('ListCharacters Component', () => {
  const mockCharacters: Character[] = [
    {
      id: 1,
      name: 'Harry Potter',
      image: 'harry.jpg',
      gender: 'male',
      species: 'human',
      alive: true
    },
    {
      id: 2,
      name: 'Hermione Granger',
      image: 'hermione.jpg',
      gender: 'female',
      species: 'human',
      alive: true
    }
  ];

  beforeEach((): void => {
    // Resetear todos los mocks antes de cada prueba
    jest.clearAllMocks();
  });

  test('renders loading state initially', (): void => {
    // Mock que devuelve una promesa que nunca se resuelve
    (fetchCharacters as jest.Mock<Promise<Character[]>>).mockImplementation(() => new Promise(() => {}));
    
    const { getByTestId }: RenderResult = render(
      <ListCharacters />
    );
    
    // Verificar el spinner de carga
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
  });

  test('renders characters after loading', async (): Promise<void> => {
    // Mock de fetchCharacters para resolver con los personajes de prueba
    (fetchCharacters as jest.Mock<Promise<Character[]>>).mockResolvedValue(mockCharacters);
    
    let renderedComponent: RenderResult = {} as RenderResult;
    
    await act(async (): Promise<void> => {
      renderedComponent = render(
        <ListCharacters />
      );
    });
    
    const { getAllByTestId, queryByTestId } = renderedComponent;
    
    // Verificar que el spinner ya no está presente
    expect(queryByTestId('loading-spinner')).not.toBeInTheDocument();
    
    // Verificar que se han renderizado las tarjetas de personajes
    const characterCards: HTMLElement[] = getAllByTestId('character-card');
    expect(characterCards.length).toBe(2);
    
    // Verificar que se llamó a la API
    expect(fetchCharacters).toHaveBeenCalledTimes(1);
  });

  test('handles API error gracefully', async (): Promise<void> => {
    (console.error as jest.Mock) = jest.fn(); // Suprimir los mensajes de error de la consola
    
    // Mock que devuelve un error
    (fetchCharacters as jest.Mock<Promise<Character[]>>).mockRejectedValue(new Error('API Error'));
    
    let renderedComponent: RenderResult = {} as RenderResult;
    
    await act(async (): Promise<void> => {
      renderedComponent = render(
        <ListCharacters />
      );
    });
    
    const { queryByTestId } = renderedComponent;
    
    // Verificar que el spinner ya no está presente después de un error
    expect(queryByTestId('loading-spinner')).not.toBeInTheDocument();
    
    // Verificar que se llamó a la API
    expect(fetchCharacters).toHaveBeenCalledTimes(1);
    
    // Verificar que se registró el error en la consola
    expect(console.error).toHaveBeenCalled();
  });
}); 