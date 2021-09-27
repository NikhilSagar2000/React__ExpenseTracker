import React, { useState } from 'react';
import './Expense.css';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart.js';

function Expense(props) {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());

    const changedYear = (year) => {
        setSelectedYear(year);
        console.log(year);
    }
    const yearWiseExpenses = props.expenses.filter((expense) => expense.date.getFullYear().toString() === selectedYear);
    

    return (
        <Card className="expenses">
            <ExpenseFilter dataForYear={selectedYear} onYearChange={changedYear} />
            <ExpenseChart filteredExpenses={ yearWiseExpenses }/>
            <ExpenseList yearWiseExpenses={yearWiseExpenses}/>
        </Card>
    )
}

export default Expense;