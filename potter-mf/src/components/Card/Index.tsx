import React from 'react'
import {
  ContainerCharacters,
  StatusBadge,
  CharacterSpan,
  CharactersDescription
} from './styles';
import { Character } from '../../types/character'
import { useTranslation } from 'react-i18next'

const Card: React.FC<Character> = ({ name, image, gender, species, alive }) => {
  const { t } = useTranslation()
  const getTextAlive = (alive: boolean) => {
    return alive ? t('alive') : t('dead')
  };
  const getSafeAlive = (alive: boolean) => {
    return alive ? "Alive" : "Dead";
  };

  return (
    <ContainerCharacters data-testid="character-card">
      <StatusBadge alive={getSafeAlive(alive)}>
        {getTextAlive(alive)}
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
