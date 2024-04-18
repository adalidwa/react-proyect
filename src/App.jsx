import CharacterCard from './componetes/CharacterCard';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [character, setCharacter] = useState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacter(data.results[0])); // Solo almacenar el primer personaje
  }, []);

  return (
    <div>
      {character && <CharacterCard character={character} />}
    </div>
  );
}

export default App;