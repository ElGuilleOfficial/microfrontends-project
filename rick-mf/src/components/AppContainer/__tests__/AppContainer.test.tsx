import { render, RenderResult } from '@testing-library/react';
import React, { ReactNode } from 'react';
import AppContainer from '../Index';
import '../../../i18n/index';

// Mock the ListCharacters component
jest.mock('../../ListCharacters/Index', () => {
  return {
    __esModule: true,
    default: (): JSX.Element => <div data-testid="list-characters">Mocked ListCharacters Component</div>,
  };
});

// Mock the Container18n component 
jest.mock('../../../context/LanguageContext', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: ReactNode }): JSX.Element => (
      <div data-testid="i18n-container">{children}</div>
    ),
  };
});

describe('AppContainer Component', () => {
  test('renders ListCharacters within Container18n', () => {
    const { getByTestId }: RenderResult = render(<AppContainer />);
    
    // Check if the i18n container is rendered
    const i18nContainer = getByTestId('i18n-container');
    expect(i18nContainer).toBeInTheDocument();
    
    // Check if the ListCharacters component is rendered inside the i18n container
    const listCharacters = getByTestId('list-characters');
    expect(listCharacters).toBeInTheDocument();
    expect(i18nContainer).toContainElement(listCharacters);
  });
}); 