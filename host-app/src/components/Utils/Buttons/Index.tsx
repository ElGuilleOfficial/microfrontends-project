import React from 'react'
import { useTranslation } from 'react-i18next'
import { BodyButtonOption } from './styles';

type ShowValue = 'rick' | 'hp' | 'none';

type ButtonProps = {
  text: string;
  action: React.Dispatch<React.SetStateAction<ShowValue>>;
};

const ButtonOption: React.FC<ButtonProps> = ({text, value, action}) => {
  const { t } = useTranslation()

  return (
    <>
      <BodyButtonOption onClick={() => action}>
        {t(text)}
      </BodyButtonOption>
    </>
  )
}

export default ButtonOption

