import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components';
import { getUsers } from './api';


const App = () => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getUsers()
      .then(users => {
        setUserList(users)
      })
      .catch(error => {
        console.error(error)
      });
  }, []);
    
  return (
    <div id="App">
      <Header 
        userList={ userList }
        currentUser={ currentUser }
        setCurrentUser={ setCurrentUser } />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);