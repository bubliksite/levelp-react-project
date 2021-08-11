import './App.scss';
import React from 'react';
import Header from './components/Header';
import TodoContainer from './container/TodoContainer';
import AddButton from './components/AddButton';
import Modals from './components/Modals';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoContainer />
      <AddButton />
      <Modals />
    </div>
  );
}

export default App;
