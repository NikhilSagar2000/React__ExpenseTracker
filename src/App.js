import React, { useState } from 'react';
import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpenses/NewExpense';

const preDefinedExpenses = [ ];
  
function App() {  
  const [expenses, updateExpensesList] = useState(preDefinedExpenses);
  const addNewExpenseData = (newExpenseDataWithID) => {
    updateExpensesList((prevList) => [newExpenseDataWithID, ...prevList]);
  }

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseData}/>
      <Expense expenses={expenses}/>
    </div>
  )
}

export default App;
