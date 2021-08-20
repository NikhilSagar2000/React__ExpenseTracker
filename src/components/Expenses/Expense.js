import React, { useState } from 'react';
import './Expense.css';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart.js';

function Expense(props) {
    const [selectedYear, setSelectedYear] = useState('2020');
    // console.log(props.expenses[0].date.getFullYear().toString());

    const changedYear = (year) => {
        setSelectedYear(year);
        console.log(year);
    }
    const yearWiseExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear);
    

    return (
        <Card className="expenses">
            <ExpenseFilter dataForYear={selectedYear} onYearChange={changedYear} />
            <ExpenseChart filteredExpenses={ yearWiseExpenses }/>
            <ExpenseList yearWiseExpenses={yearWiseExpenses}/>
            {/* <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date}>
            </ExpenseItem> */}
        </Card>
    )
}

export default Expense;