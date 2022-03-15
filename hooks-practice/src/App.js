import './App.css';
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const initial_dummy_expenses = [
  {
    item: 'Peloton',
    amount: 1400.00,
    uses: 0,
    id: '1'
  },
  {
    item: 'Car',
    amount: 32000.00,
    uses: 0,
    id: '2'
  }
]

const App = () => {

    // returns an array, first value is value itself, second value is the updating function
    // use array destructuring to store both elements in separate constants

    // the FIRST element is the current state value
    // the second element is a fucntion for updating that value
  const [ items, setItems ] = useState(initial_dummy_expenses);

  const addItemHandler = item => {
    setItems((prevItems) => {
      return [item, ...prevItems]
    })
  }

  const newAmountHandler = (amount) => {
    console.log(amount, 'item in updateItemAmount in APP.js')
  }


  return (
    <div className="App">
      <NewExpense addItemHandler={addItemHandler}/>
      <Expenses items={items} newAmountHandler={newAmountHandler} />
    </div>
  );
}

export default App;
