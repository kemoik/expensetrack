
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExp from './components/IncomeExp';
import TransactionalList from './components/TransactionalList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider >
     <Header/>
     <div className="container">
         <Balance/>
         <IncomeExp/>
         <TransactionalList/>
         <AddTransaction/>
     </div>
    </GlobalProvider>
  );
}

export default App;
