const translations = {
  'gender': 'Gender',
  'male': 'Male',
  'female': 'Female',
  'human': 'Human',
  'species': 'Species',
  'dead': 'Dead',
  'alive': 'Alive'
};

const t = jest.fn((key) => translations[key] || key);

const react = {
  createElement: jest.fn(),
  Component: jest.fn(),
};

const I18nextProvider = ({ children }) => children;

const useTranslation = () => {
  return {
    t,
    i18n: {
      language: 'en',
      changeLanguage: jest.fn()
    }
  };
};

const initReactI18next = {
  type: 'backend',
  init: jest.fn(),
};

module.exports = {
  useTranslation,
  initReactI18next,
  I18nextProvider,
  react
}; 