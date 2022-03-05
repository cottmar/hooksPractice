import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expenses = [
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

  const addItemHandler = (item) => {
    console.log('in app.js', item);
  }


  return (
    <div className="App">
      <NewExpense addItemHandler={addItemHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
