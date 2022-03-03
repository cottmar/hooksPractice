import './App.css';
import Expenses from './components/Expenses/Expenses';

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


  return (
    <div className="App">
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
