import { Character } from '../../types/character';

export async function fetchCharacters(): Promise<Character[]> {
  const BASE_URL = 'https://hp-api.onrender.com/api';

  try {
    const response = await fetch(`${BASE_URL}/characters`);
    const data: Character[] = await response.json();
    return data.filter((character) =>
      character.image !== null && character.image.trim() !== ''
    );
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}
