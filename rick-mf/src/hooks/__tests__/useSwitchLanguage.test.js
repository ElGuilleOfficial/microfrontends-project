// Mock the i18n module first
jest.mock('../../i18n', () => ({
  __esModule: true,
  default: {
    changeLanguage: jest.fn()
  }
}));

// Import after mocking
const useSwitchLanguage = require('../useSwitchLanguage').default;
const i18n = require('../../i18n').default;

describe('useSwitchLanguage Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should call i18n.changeLanguage with the correct language', () => {
    const switchLanguage = useSwitchLanguage();
    
    // Call the hook function with 'es' language
    switchLanguage('es');
    
    // Check if the i18n.changeLanguage was called with 'es'
    expect(i18n.changeLanguage).toHaveBeenCalledWith('es');
    expect(i18n.changeLanguage).toHaveBeenCalledTimes(1);
    
    // Call the hook function with 'en' language
    switchLanguage('en');
    
    // Check if the i18n.changeLanguage was called with 'en'
    expect(i18n.changeLanguage).toHaveBeenCalledWith('en');
    expect(i18n.changeLanguage).toHaveBeenCalledTimes(2);
  });
}); 