import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle,updateEnteredTitle] = useState('');
    const [enteredAmount,updateEnteredAmount] = useState('');
    const [enteredDate,updateEnteredDate] = useState('');
    
    const handleTitle = e => {
        updateEnteredTitle(e.target.value);

    } 
    const handleAmount = e => {
        updateEnteredAmount(e.target.value);
    } 
    const handleDate = e => {
        updateEnteredDate(e.target.value);
        
    } 

    const handleFormData = (event) => {
        event.preventDefault();

        const newExpenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        
        props.onSavingExpenseData(newExpenseData);
        updateEnteredTitle('');
        updateEnteredAmount('');
        updateEnteredDate('');

    }
    return (
        <form onSubmit={handleFormData}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={handleTitle} value={enteredTitle} required/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" onChange={handleAmount} min="0.01" step="0.01" value={enteredAmount} required/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" onChange={handleDate} min="2019-01-01" max="2022-12-31" value={enteredDate} required/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;