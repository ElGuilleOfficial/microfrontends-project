// Import React first
const React = require('react');
const { render } = require('@testing-library/react');

// Mock the ListCharacters component
jest.mock('../../ListCharacters/Index', () => 
  function MockListCharacters() {
    return React.createElement('div', { 'data-testid': 'list-characters' }, 'Mocked ListCharacters Component');
  }
);

// Mock the Container18n component 
jest.mock('../../../context/LanguageContext', () => 
  function MockContainer18n(props) {
    return React.createElement('div', { 'data-testid': 'i18n-container' }, props.children);
  }
);

// Import component after mocking
const AppContainer = require('../Index').default;

describe('AppContainer Component', () => {
  test('renders ListCharacters within Container18n', () => {
    const { getByTestId } = render(React.createElement(AppContainer));
    
    // Check if the i18n container is rendered
    const i18nContainer = getByTestId('i18n-container');
    expect(i18nContainer).toBeInTheDocument();
    
    // Check if the ListCharacters component is rendered inside the i18n container
    const listCharacters = getByTestId('list-characters');
    expect(listCharacters).toBeInTheDocument();
    expect(i18nContainer).toContainElement(listCharacters);
  });
}); 