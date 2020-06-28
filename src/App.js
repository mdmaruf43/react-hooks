import React from 'react';
import './App.css'
import HookCounter2 from './Components/HookCounter2';
import ClassCounterTwo from './Components/ClassCounterTwo';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <HookCounter /> */}
      <HookCounter2 />
      <ClassCounterTwo />
    </div>
  );
}

export default App;
