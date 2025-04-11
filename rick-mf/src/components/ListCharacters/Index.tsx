import { useEffect, useState } from 'react'
import { Character } from '../../types/character';
import { fetchCharacters } from '../../services/api/characters';
import { ContainerCharacters, Grid } from './styles';
import Container18n from '../../context/LanguageContext';
import Card from '../Card/Index';
import LoadingSpinner from '../Utils/Loading/Index';

const ListCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchCharacters()
      .then((data) => setCharacters(data))
      .catch((error) => console.error('Error:', error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Container18n>
      <ContainerCharacters>
        <Grid>
          {characters.map((char) => (
            <Card
              key={char.id}
              name={char.name}
              image={char.image}
              gender={char.gender}
              species={char.species}
              status={char.status}
            />
          ))}
        </Grid>
      </ContainerCharacters>
    </Container18n>
  )
}

export default ListCharacters
