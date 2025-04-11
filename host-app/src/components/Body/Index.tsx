import React, { Suspense, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ContainerBody,
  BodyTitle,
  BodyButtons,
  BodyButtonOption,
} from './styles';

const RickCharacters = React.lazy(() => import('rick/AppContainer'))
const PotterCharacters = React.lazy(() => import('potter/AppContainer'))

const Body: React.FC = () => {
  const { t } = useTranslation()
  const [show, setShow] = useState<'none' | 'rick' | 'hp'>('none')

  return (
    <>
      <ContainerBody>
        <BodyTitle> {t('description')} </BodyTitle>

        <BodyButtons>
          <BodyButtonOption onClick={() => setShow('rick')}>
            {t('buttonRick')}
          </BodyButtonOption>

          <BodyButtonOption onClick={() => setShow('hp')}>
            {t('buttonHP')}
          </BodyButtonOption>
        </BodyButtons>
      </ContainerBody>

      <Suspense>
        {show === 'rick' && <RickCharacters/>}
        {show === 'hp' && <PotterCharacters/>}
      </Suspense>
    </>
  )
}

export default Body

