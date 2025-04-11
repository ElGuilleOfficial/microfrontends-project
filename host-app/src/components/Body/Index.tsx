import React, { Suspense, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ContainerBody,
  BodyTitle,
  BodyButtons,
  BodyButtonOption,
} from './styles'
import { Options } from '../../types/options'

const Body: React.FC = () => {
  const { t } = useTranslation()
  const [Component, setComponent] = useState<React.LazyExoticComponent<React.ComponentType> | null>(null)

  const handleLoad = async (option: Options) => {
    if (option === Options.rick) {
      const LazyRick = React.lazy(() => import('rick/AppContainer'))
      setComponent(() => LazyRick)
    }

    if (option === Options.hp) {
      const LazyPotter = React.lazy(() => import('potter/AppContainer'))
      setComponent(() => LazyPotter)
    }
  }

  return (
    <>
      <ContainerBody>
        <BodyTitle>{t('description')}</BodyTitle>

        <BodyButtons>
          <BodyButtonOption onClick={() => handleLoad(Options.rick)}>
            {t('buttonRick')}
          </BodyButtonOption>

          <BodyButtonOption onClick={() => handleLoad(Options.hp)}>
            {t('buttonHP')}
          </BodyButtonOption>
        </BodyButtons>
      </ContainerBody>

      <Suspense>
        {Component && <Component />}
      </Suspense>
    </>
  )
}

export default Body
