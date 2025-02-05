import CharacterCard from '../components/CharacterCard';

export default {
  title: 'Components/CharacterCard',
  component: CharacterCard,
};

const mockCharacter = {
  name: 'Luke Skywalker',
  gender: 'Male',
  birth_year: '19BBY',
  height: '172',
  mass: '77',
  hair_color: 'Blond',
  homeworld: 'Tatooine',
  url: 'https://swapi.dev/api/people/1/',
};

export const Default = () => <CharacterCard character={mockCharacter} />;