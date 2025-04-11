import React, { ReactElement } from 'react';
import { render, waitFor, RenderResult } from '@testing-library/react';
import ListCharacters from '../Index';
import { fetchCharacters } from '../../../services/api/characters';
import { Character } from '../../../types/character';

// Mock i18n library first
jest.mock('../../../i18n', () => ({
  __esModule: true,
  default: {
    changeLanguage: jest.fn()
  }
}));

// Mock react-i18next next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string): string => key
  }),
  I18nextProvider: ({ children }: { children: React.ReactNode }) => children
}));

// Mock the API service
jest.mock('../../../services/api/characters', () => ({
  fetchCharacters: jest.fn()
}));

// Mock the Card component
jest.mock('../../Card/Index', () => 
  function MockCard(props: Character): ReactElement {
    return (
      <div 
        data-testid="card-component" 
        data-name={props.name} 
        data-image={props.image} 
        data-gender={props.gender} 
        data-species={props.species} 
        data-status={props.status}
      >
        Mocked Card
      </div>
    );
  }
);

// Mock the styled components
jest.mock('../styles', () => ({
  ContainerCharacters: function MockContainer({ children }: { children: React.ReactNode }): ReactElement {
    return <div data-testid="list-container">{children}</div>;
  },
  Grid: function MockGrid({ children }: { children: React.ReactNode }): ReactElement {
    return <div data-testid="character-grid">{children}</div>;
  }
}));

// Mock the loading component
jest.mock('../../Utils/Loading/Index', () => 
  function MockLoadingSpinner(): ReactElement {
    return <div data-testid="loading-spinner">Loading...</div>;
  }
);

// Mock the LanguageContext component
jest.mock('../../../context/LanguageContext', () => 
  function MockContainer18n({ children }: { children: React.ReactNode }): ReactElement {
    return <div data-testid="i18n-container">{children}</div>;
  }
);

describe('ListCharacters Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  test('displays loading state initially', () => {
    (fetchCharacters as jest.Mock).mockReturnValue(new Promise(() => {})); // Never resolves
    
    const { getByTestId }: RenderResult = render(<ListCharacters />);
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
  });
  
  test('renders characters from API', async () => {
    const mockCharacters: Character[] = [
      { id: 1, name: 'Rick Sanchez', image: 'rick.jpg', gender: 'Male', species: 'Human', status: 'Alive' },
      { id: 2, name: 'Morty Smith', image: 'morty.jpg', gender: 'Male', species: 'Human', status: 'Alive' },
    ];
    
    (fetchCharacters as jest.Mock).mockResolvedValue(mockCharacters);
    
    const { getAllByTestId }: RenderResult = render(<ListCharacters />);
    
    await waitFor(() => {
      const cards = getAllByTestId('card-component');
      expect(cards).toHaveLength(2);
      expect(cards[0]).toHaveAttribute('data-name', 'Rick Sanchez');
      expect(cards[1]).toHaveAttribute('data-name', 'Morty Smith');
    });
  });
  
  test('handles API error gracefully', async () => {
    console.error = jest.fn(); // Mock console.error to avoid error in test output
    
    (fetchCharacters as jest.Mock).mockRejectedValue(new Error('API Error'));
    
    render(<ListCharacters />);
    
    await waitFor(() => {
      expect(console.error).toHaveBeenCalled();
    });
  });
}); 