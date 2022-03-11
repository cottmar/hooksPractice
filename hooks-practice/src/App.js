import './App.css';
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const initial_dummy_expenses = [
  {
    item: 'Peloton',
    amount: 1400.00,
    uses: 0
  },
  {
    item: 'Car',
    amount: 32000.00,
    uses: 0
  }
]

const App = () => {

  const [ items, setItems ] = useState(initial_dummy_expenses);

  const addItemHandler = item => {
    setItems((prevItems) => {
      return [item, ...prevItems]
    })
  }


  return (
    <div className="App">
      <NewExpense addItemHandler={addItemHandler}/>
      <Expenses items={items}/>
    </div>
  );
}

export default App;
