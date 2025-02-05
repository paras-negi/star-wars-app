export const fetchCharacters = async (page: number = 1) => {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    if (!response.ok) throw new Error('Failed to fetch characters');
    return response.json();
  };
  
  export const fetchCharacterDetails = async (id: string) => {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    if (!response.ok) throw new Error('Failed to fetch character details');
    return response.json();
  };