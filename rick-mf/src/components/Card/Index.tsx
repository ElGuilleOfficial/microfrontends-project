import React from 'react'
import {
  ContainerCharacters,
  StatusBadge,
  CharacterSpan,
  CharactersDescription
} from './styles';
import { Character } from '../../types/character'
import { useTranslation } from 'react-i18next'

const Card: React.FC<Character> = ({ name, image, gender, species, status  }) => {
  const { t } = useTranslation()
  const getTextStatus = (status: string) => {
    switch (status) {
      case 'Alive':
        return  t('alive');
      case 'Dead':
        return t('dead');
      default:
        return t('unknown');
    }
  };
  const getSafeStatus = (status: string): 'Alive' | 'Dead' | 'unknown' => {
    if (status === 'Alive' || status === 'Dead' || status === 'unknown') {
      return status;
    }
    return 'unknown';
  };

  return (
    <ContainerCharacters>
      <StatusBadge status={getSafeStatus(status)}>
        {getTextStatus(status)}
      </StatusBadge>

      <img src={image} alt={name} />
      <CharacterSpan> {name} </CharacterSpan>

      <CharactersDescription>
        <span> {t('gender')}: {t(`${gender}`)} </span>
        <span> {t('species')}: {t(`${species}`)} </span>
      </CharactersDescription>
    </ContainerCharacters>
  )
}

export default Card
