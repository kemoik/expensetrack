
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExp from './components/IncomeExp';
import TransactionalList from './components/TransactionalList';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <div >
     <Header/>
     <div className="container">
         <Balance/>
         <IncomeExp/>
         <TransactionalList/>
         <AddTransaction/>
     </div>
    </div>
  );
}

export default App;
