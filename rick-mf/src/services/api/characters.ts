import { Character } from '../../types/character';

interface ApiResponse {
  results: Character[];
}

export async function fetchCharacters(): Promise<Character[]> {
  const BASE_URL = 'https://rickandmortyapi.com/api';

  try {
    const response = await fetch(`${BASE_URL}/character`);
    const data: ApiResponse = await response.json();
    return data.results;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}
