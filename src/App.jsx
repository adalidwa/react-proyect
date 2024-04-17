import Card from './componetes/Card';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        // Obtener un índice aleatorio para seleccionar los personajes
        const randomIndex = Math.floor(Math.random() * (data.results.length - 10)); // Asegura que al menos haya 10 personajes disponibles
        // Tomar solo los siguientes 10 personajes comenzando desde el índice aleatorio
        const selectedCharacters = data.results.slice(randomIndex, randomIndex + 10);
        setCharacters(selectedCharacters);
      });
  }, []);

  return (
    <div className="App">
      <div className="characters">
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default App;
