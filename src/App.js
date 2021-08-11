import './App.scss';
import React from 'react';
import Header from './components/Header';
import TodoContainer from './container/TodoContainer';
import AddButton from './components/AddButton';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoContainer />
      <AddButton />
    </div>
  );
}

export default App;
