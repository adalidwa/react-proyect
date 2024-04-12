import Card from './componetes/Card'
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://661037d60640280f219c993c.mockapi.io/api/v2/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data)
      });
  }, []);

  return (
    <>
      <div>
        {
         users.map((user) => (<Card key={user.id} user={user}/>
        ))}
      </div>
    </>
  );
}
 
export default App
