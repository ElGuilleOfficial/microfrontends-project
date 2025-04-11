const { render, screen } = require('@testing-library/react');
const Card = require('../Index').default;
require('../../../../i18n/index');

// Mock the styled-components
jest.mock('../styles', () => ({
  ContainerCharacters: ({ children }) => <div data-testid="container-characters">{children}</div>,
  StatusBadge: ({ children, status }) => 
    <div data-testid="status-badge" data-status={status}>{children}</div>,
  CharacterSpan: ({ children }) => <span data-testid="character-span">{children}</span>,
  CharactersDescription: ({ children }) => 
    <div data-testid="characters-description">{children}</div>
}));

const mockCharacter = {
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
    const unknownCharacter = {
      ...mockCharacter,
      status: 'unknown'
    };
    
    render(<Card {...unknownCharacter} />);
    
    const statusBadge = screen.getByTestId('status-badge');
    expect(statusBadge).toHaveAttribute('data-status', 'unknown');
    expect(statusBadge).toHaveTextContent('Unknown');
  });
  
  test('renders dead status correctly', () => {
    const deadCharacter = {
      ...mockCharacter,
      status: 'Dead'
    };
    
    render(<Card {...deadCharacter} />);
    
    const statusBadge = screen.getByTestId('status-badge');
    expect(statusBadge).toHaveAttribute('data-status', 'Dead');
    expect(statusBadge).toHaveTextContent('Dead');
  });
}); 