import useSwitchLanguageRick from 'rick/hooks/useSwitchLanguage';
import useSwitchLanguageHp from 'potter/hooks/useSwitchLanguage';

import i18n from '../i18n';

const useSwitchLanguage = () => {
  const switchAppRickLanguageHook = useSwitchLanguageRick();
  const switchAppHpLanguageHook = useSwitchLanguageHp();

  // Host
  const switchHostLanguage = (language: string) =>
    i18n.changeLanguage(language);

  // Rick and Morty
  const switchAppRickLanguage = (language: string) =>
    switchAppRickLanguageHook(language);

  // Harry Potter
  const switchAppHpLanguage = (language: string) =>
    switchAppHpLanguageHook(language);

  // All apps
  const switchAllLanguages = (language: string) => {
    switchHostLanguage(language);
    switchAppRickLanguage(language);
    switchAppHpLanguage(language);
  };

  return {
    switchHostLanguage,
    switchAppRickLanguage,
    switchAppHpLanguage,
    switchAllLanguages,
  };
};

export default useSwitchLanguage;

