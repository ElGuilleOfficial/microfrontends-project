import { fetchCharacters } from '../characters';
import { Character } from '../../../types/character';

// Mockear fetch
global.fetch = jest.fn() as unknown as jest.Mock;

describe('characters API', () => {
  beforeEach((): void => {
    jest.clearAllMocks();
  });

  test('fetchCharacters returns data from API', async (): Promise<void> => {
    const mockData: Character[] = [
      {
        id: 1,
        name: 'Harry Potter',
        image: 'harry.jpg',
        gender: 'male',
        species: 'human',
        alive: true
      }
    ];
    
    // Mock de la respuesta de fetch
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData)
    });
    
    const result: Character[] = await fetchCharacters();
    
    // Verificar que fetch fue llamado con la URL correcta
    expect(fetch).toHaveBeenCalledWith('https://hp-api.onrender.com/api/characters');
    
    // Verificar que se devuelven los datos filtrados
    expect(result).toEqual(mockData);
  });

  test('fetchCharacters filters out characters with empty images', async (): Promise<void> => {
    type CharacterWithNullImage = Omit<Character, 'image'> & { image: string | null };
    
    const mockData: (Character | CharacterWithNullImage)[] = [
      {
        id: 1,
        name: 'Harry Potter',
        image: 'harry.jpg',
        gender: 'male',
        species: 'human',
        alive: true
      },
      {
        id: 2,
        name: 'No Image',
        image: null,
        gender: 'male',
        species: 'human',
        alive: true
      },
      {
        id: 3,
        name: 'Empty Image',
        image: '',
        gender: 'female',
        species: 'human',
        alive: true
      }
    ];
    
    // Mock de la respuesta de fetch
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData)
    });
    
    const result: Character[] = await fetchCharacters();
    
    // Verificar que fetch fue llamado con la URL correcta
    expect(fetch).toHaveBeenCalledWith('https://hp-api.onrender.com/api/characters');
    
    // Verificar que solo se devuelve el personaje con imagen
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Harry Potter');
  });

  test('fetchCharacters throws error when API call fails', async (): Promise<void> => {
    // Mock de error en fetch
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('API Error'));
    
    // Verificar que la función lanza el error
    await expect(fetchCharacters()).rejects.toThrow('Error fetching data: Error: API Error');
  });
}); 