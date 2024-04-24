import CharacterCard from './componetes/CharacterCard';
import './App.css';
import { useEffect, useState } from 'react';
import {useSearchParams} from "react-router-dom";



function RickandMortyApp() {
  const [character, setCharacter] = useState(null);
  const [searchParmas] = useSearchParams();
  const id=searchParmas.get("id")
  useEffect(() => {
    if (id){

      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => res.json())
        .then((data) => setCharacter(data)); // Solo almacenar el primer personaje
    }
  }, [id]);

  return (
    <div>
      {character && <CharacterCard character={character} />}
    </div>
  );
}

export default RickandMortyApp;