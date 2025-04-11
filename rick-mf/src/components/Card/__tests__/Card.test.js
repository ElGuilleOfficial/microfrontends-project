// Mock react-i18next before imports
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => {
      const translations = {
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

// Imports para React antes de los mocks
const React = require('react');
const { render, screen } = require('@testing-library/react');

// Mock styled-components
jest.mock('../styles', () => ({
  ContainerCharacters: function(props) { 
    return React.createElement('div', { 'data-testid': 'container-characters' }, props.children);
  },
  StatusBadge: function(props) {
    return React.createElement('div', { 'data-testid': 'status-badge', 'data-status': props.status }, props.children);
  },
  CharacterSpan: function(props) {
    return React.createElement('span', { 'data-testid': 'character-span' }, props.children);
  },
  CharactersDescription: function(props) {
    return React.createElement('div', { 'data-testid': 'characters-description' }, props.children);
  }
}));

// Import component after mocks
const Card = require('../Index').default;

const mockCharacter = {
  name: 'Rick Sanchez',
  image: 'rick-image.jpg',
  gender: 'Male',
  species: 'Human',
  status: 'Alive'
};

describe('Card Component', () => {
  test('renders character information correctly', () => {
    render(React.createElement(Card, mockCharacter));
    
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
    const unknownCharacter = {
      ...mockCharacter,
      status: 'unknown'
    };
    
    render(React.createElement(Card, unknownCharacter));
    
    const statusBadge = screen.getByTestId('status-badge');
    expect(statusBadge).toHaveAttribute('data-status', 'unknown');
    expect(statusBadge).toHaveTextContent('Unknown');
  });
  
  test('renders dead status correctly', () => {
    const deadCharacter = {
      ...mockCharacter,
      status: 'Dead'
    };
    
    render(React.createElement(Card, deadCharacter));
    
    const statusBadge = screen.getByTestId('status-badge');
    expect(statusBadge).toHaveAttribute('data-status', 'Dead');
    expect(statusBadge).toHaveTextContent('Dead');
  });
}); 