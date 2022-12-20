import './App.css';
import { Details, List } from './components/index.js';
import { useEffect, useState } from 'react';


function App() {
  const [users, setUsers] = useState({
    allUsers: [],
    activeUser: null
  })

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then((resolve) => resolve.json())
      .then(loadUsers => {
        setUsers({...users, allUsers: loadUsers})
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChangeUser = (id) => {
    setUsers({...users, activeUser: id});
  }

  return (
    <div className="App">
      <List users={users.allUsers} activeUser={users.activeUser} handleChangeUser={handleChangeUser}/>
      {users.activeUser === null ? null : <Details info={{id: users.activeUser}}/>}
    </div>
  );
}

export default App;
