const i18n = {
  changeLanguage: jest.fn(),
  language: 'en',
  use: jest.fn().mockReturnThis(),
  init: jest.fn(),
};

module.exports = { __esModule: true, default: i18n }; 