const { render, waitFor } = require('@testing-library/react');
const ListCharacters = require('../Index').default;
const { fetchCharacters } = require('../../../services/api/characters');
require('../../../i18n/index');

// Mock the API service
jest.mock('../../../services/api/characters');

// Mock the Card component
jest.mock('../../Card/Index', () => {
  return {
    __esModule: true,
    default: ({ name, image, gender, species, status }) => (
      <div data-testid="card-component" data-name={name} data-image={image} data-gender={gender} data-species={species} data-status={status}>
        Mocked Card
      </div>
    ),
  };
});

// Mock the styled components
jest.mock('../styles', () => ({
  ContainerCharacters: ({ children }) => <div data-testid="list-container">{children}</div>,
  Grid: ({ children }) => <div data-testid="character-grid">{children}</div>,
}));

// Mock the loading component
jest.mock('../../Utils/Loading/Index', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="loading-spinner">Loading...</div>,
  };
});

describe('ListCharacters Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  test('displays loading state initially', () => {
    (fetchCharacters).mockReturnValue(new Promise(() => {})); // Never resolves
    
    const { getByTestId } = render(<ListCharacters />);
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
  });
  
  test('renders characters from API', async () => {
    const mockCharacters = [
      { id: 1, name: 'Rick Sanchez', image: 'rick.jpg', gender: 'Male', species: 'Human', status: 'Alive' },
      { id: 2, name: 'Morty Smith', image: 'morty.jpg', gender: 'Male', species: 'Human', status: 'Alive' },
    ];
    
    (fetchCharacters).mockResolvedValue(mockCharacters);
    
    const { getAllByTestId } = render(<ListCharacters />);
    
    await waitFor(() => {
      const cards = getAllByTestId('card-component');
      expect(cards).toHaveLength(2);
      expect(cards[0]).toHaveAttribute('data-name', 'Rick Sanchez');
      expect(cards[1]).toHaveAttribute('data-name', 'Morty Smith');
    });
  });
  
  test('handles API error gracefully', async () => {
    console.error = jest.fn(); // Mock console.error to avoid error in test output
    
    (fetchCharacters).mockRejectedValue(new Error('API Error'));
    
    render(<ListCharacters />);
    
    await waitFor(() => {
      expect(console.error).toHaveBeenCalled();
    });
  });
}); 