import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Index';
import { Character } from '../../../types/character';

// Mock react-i18next before imports
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string): string => {
      const translations: Record<string, string> = {
        'alive': 'Alive',
        'dead': 'Dead',
        'unknown': 'Unknown',
        'gender': 'Gender',
        'species': 'Species',
        'Male': 'Male',
        'Human': 'Human'
      };
      return translations[key] || key;
    }
  })
}));

// Mock styled-components
jest.mock('../styles', () => ({
  ContainerCharacters: ({ children }: { children: React.ReactNode }): JSX.Element => (
    <div data-testid="container-characters">{children}</div>
  ),
  StatusBadge: ({ children, status }: { children: React.ReactNode, status: 'Alive' | 'Dead' | 'unknown' }): JSX.Element => (
    <div data-testid="status-badge" data-status={status}>{children}</div>
  ),
  CharacterSpan: ({ children }: { children: React.ReactNode }): JSX.Element => (
    <span data-testid="character-span">{children}</span>
  ),
  CharactersDescription: ({ children }: { children: React.ReactNode }): JSX.Element => (
    <div data-testid="characters-description">{children}</div>
  )
}));

const mockCharacter: Character = {
  name: 'Rick Sanchez',
  image: 'rick-image.jpg',
  gender: 'Male',
  species: 'Human',
  status: 'Alive'
};

describe('Card Component', () => {
  test('renders character information correctly', () => {
    render(<Card {...mockCharacter} />);
    
    // Check if the image is rendered with correct props
    const image = screen.getByAltText('Rick Sanchez');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'rick-image.jpg');
    
    // Check if the name is displayed
    const nameElement = screen.getByTestId('character-span');
    expect(nameElement).toHaveTextContent('Rick Sanchez');
    
    // Check if the status badge is displayed
    const statusBadge = screen.getByTestId('status-badge');
    expect(statusBadge).toHaveAttribute('data-status', 'Alive');
    expect(statusBadge).toHaveTextContent('Alive');
    
    // Check if gender and species are displayed
    const descriptionElement = screen.getByTestId('characters-description');
    expect(descriptionElement).toHaveTextContent('Gender: Male');
    expect(descriptionElement).toHaveTextContent('Species: Human');
  });
  
  test('renders unknown status correctly', () => {
    const unknownCharacter: Character = {
      ...mockCharacter,
      status: 'unknown'
    };
    
    render(<Card {...unknownCharacter} />);
    
    const statusBadge = screen.getByTestId('status-badge');
    expect(statusBadge).toHaveAttribute('data-status', 'unknown');
    expect(statusBadge).toHaveTextContent('Unknown');
  });
  
  test('renders dead status correctly', () => {
    const deadCharacter: Character = {
      ...mockCharacter,
      status: 'Dead'
    };
    
    render(<Card {...deadCharacter} />);
    
    const statusBadge = screen.getByTestId('status-badge');
    expect(statusBadge).toHaveAttribute('data-status', 'Dead');
    expect(statusBadge).toHaveTextContent('Dead');
  });
}); 