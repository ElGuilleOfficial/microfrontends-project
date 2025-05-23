import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

interface AppI18nWrapperProps {
  children: React.ReactNode;
}

const Container18n: React.FC<AppI18nWrapperProps> = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default Container18n;
