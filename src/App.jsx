import Card from './componetes/Card';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Función para generar 10 números aleatorios únicos entre 1 y 826
    const generateRandomNumbers = () => {
      const numbers = [];
      while (numbers.length < 10) {
        const randomNum = Math.floor(Math.random() * 826) + 1;
        if (!numbers.includes(randomNum)) {
          numbers.push(randomNum);
        }
      }
      return numbers;
    };

    // Obtener los IDs aleatorios
    const randomIds = generateRandomNumbers();

    // Hacer solicitudes para obtener los personajes correspondientes a los IDs aleatorios
    Promise.all(randomIds.map(id => fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())))
      .then(data => {
        setCharacters(data);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
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