import i18n from '../i18n';

const useSwitchLanguage = () => {
  return (language: string) => i18n.changeLanguage(language);
};

export default useSwitchLanguage;
