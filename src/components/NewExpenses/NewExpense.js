import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

   const [isEditing, setIsEditing] = useState(false);

   const sendingData = (newExpenseData) => {
      const newExpenseDataWithID = {
         ...newExpenseData,
         id: Math.ceil(Math.random() * 100000).toString()
      }
      console.log(newExpenseDataWithID);
      props.onAddNewExpense(newExpenseDataWithID);
   }

   const falsifyIsEditingState = () => {
      setIsEditing(false)
   }
   const truthifyIsEditingState = () => {
      setIsEditing(true)
   }

   return (
      <div className='new-expense'>
         { !isEditing && (<button onClick={truthifyIsEditingState}>Add New Expense</button>)}
         
         { isEditing && (<ExpenseForm onSavingExpenseData={sendingData} onCancel={falsifyIsEditingState} />)}
        
      </div>
   )
   
}

export default NewExpense;