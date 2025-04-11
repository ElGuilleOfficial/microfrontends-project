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
    t: (key) => key
  }),
  I18nextProvider: ({ children }) => children
}));

// Mock the API service
jest.mock('../../../services/api/characters', () => ({
  fetchCharacters: jest.fn()
}));

// Import React before using createElement
const React = require('react');
const { render, waitFor } = require('@testing-library/react');

// Mock the Card component
jest.mock('../../Card/Index', () => 
  function MockCard(props) {
    return React.createElement('div', {
      'data-testid': 'card-component',
      'data-name': props.name,
      'data-image': props.image,
      'data-gender': props.gender,
      'data-species': props.species,
      'data-status': props.status
    }, 'Mocked Card');
  }
);

// Mock the styled components
jest.mock('../styles', () => ({
  ContainerCharacters: function(props) {
    return React.createElement('div', { 'data-testid': 'list-container' }, props.children);
  },
  Grid: function(props) {
    return React.createElement('div', { 'data-testid': 'character-grid' }, props.children);
  }
}));

// Mock the loading component
jest.mock('../../Utils/Loading/Index', () => 
  function MockLoadingSpinner() {
    return React.createElement('div', { 'data-testid': 'loading-spinner' }, 'Loading...');
  }
);

// Mock the LanguageContext component
jest.mock('../../../context/LanguageContext', () => 
  function MockContainer18n(props) {
    return React.createElement('div', { 'data-testid': 'i18n-container' }, props.children);
  }
);

// Import components after mocking
const ListCharacters = require('../Index').default;
const { fetchCharacters } = require('../../../services/api/characters');

describe('ListCharacters Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  test('displays loading state initially', () => {
    fetchCharacters.mockReturnValue(new Promise(() => {})); // Never resolves
    
    const { getByTestId } = render(React.createElement(ListCharacters));
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
  });
  
  test('renders characters from API', async () => {
    const mockCharacters = [
      { id: 1, name: 'Rick Sanchez', image: 'rick.jpg', gender: 'Male', species: 'Human', status: 'Alive' },
      { id: 2, name: 'Morty Smith', image: 'morty.jpg', gender: 'Male', species: 'Human', status: 'Alive' },
    ];
    
    fetchCharacters.mockResolvedValue(mockCharacters);
    
    const { getAllByTestId } = render(React.createElement(ListCharacters));
    
    await waitFor(() => {
      const cards = getAllByTestId('card-component');
      expect(cards).toHaveLength(2);
      expect(cards[0]).toHaveAttribute('data-name', 'Rick Sanchez');
      expect(cards[1]).toHaveAttribute('data-name', 'Morty Smith');
    });
  });
  
  test('handles API error gracefully', async () => {
    console.error = jest.fn(); // Mock console.error to avoid error in test output
    
    fetchCharacters.mockRejectedValue(new Error('API Error'));
    
    render(React.createElement(ListCharacters));
    
    await waitFor(() => {
      expect(console.error).toHaveBeenCalled();
    });
  });
}); 