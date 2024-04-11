import Card from './componetes/Card'
import './App.css'
import { useEffect, useState } from 'react';
import UserDatails from './componetes/UserDatails';



function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://661037d60640280f219c993c.mockapi.io/api/v2/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data)
        console.log(data)
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
