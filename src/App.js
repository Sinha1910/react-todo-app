import React from 'react';
import Header from './components/header/index';
import Taskbar from './components/taskbar';
import Tasklist from './components/tasklist';

function App() {
  return (
    <div>
      <Header/>
      <Taskbar/>
      <Tasklist/>
    </div>
  );
}

export default App;
