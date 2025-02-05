'use server';
 // Mark this file as a Server Action

/**
 * Fetch a list of characters from SWAPI.
 * @param page - The page number to fetch.
 * @returns A list of characters.
 */
export const fetchCharacters = async (page: number) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page || 1}`);
    if (!response.ok) throw new Error('Failed to fetch characters');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

/**
 * Fetch details for a specific character from SWAPI.
 * @param id - The ID of the character.
 * @returns The character's details.
 */
export const fetchCharacterDetails = async (id: string) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    if (!response.ok) throw new Error('Failed to fetch character details');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching character details:', error);
    throw error;
  }
};

/**
 * Fetch additional details for films and starships.
 * @param urls - An array of URLs to fetch.
 * @returns A list of fetched data.
 */
export const fetchAdditionalDetails = async (urls: string[]) => {
  try {
    const results = await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch data from ${url}`);
        return response.json();
      })
    );
    return results;
  } catch (error) {
    console.error('Error fetching additional details:', error);
    throw error;
  }
};