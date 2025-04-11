import React from 'react'
import { useTranslation } from 'react-i18next'
import useSwitchLanguage from '../../hooks/useSwitchLanguage';
import {
  ContainerHeader,
  CharacterExplorer,
  LanguageButton
} from './styles';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { switchAllLanguages } = useSwitchLanguage();

  const handleLanguageSwitch = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en'
    switchAllLanguages(newLang)
  }

  return (
    <>
      <ContainerHeader>
        <CharacterExplorer>
          N5 Microfrontends - {t('title')}
        </CharacterExplorer>

        <LanguageButton onClick={handleLanguageSwitch}>
          🌐 {i18n.language === 'en' ? 'ES' : 'EN'}
        </LanguageButton>
      </ContainerHeader>
    </>
  )
}

export default Header