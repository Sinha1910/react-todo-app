import React from 'react';
import Header from './components/header/index';
import Taskbar from './components/taskbar';
import Tasklist from './components/tasklist';
import UserDetails from './components/userDetails';
function App() {
  return (
    <div>
      <Header/>
      <Taskbar/>
      <Tasklist/>
      <UserDetails/>
    </div>
  );
}

export default App;
