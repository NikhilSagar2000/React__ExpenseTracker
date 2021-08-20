import './ExpenseDate.css';
import Card from '../UI/Card';

function ExpenseDate(props) {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', { month: 'long'});
    const dayOfMonth = props.date.getDate();
    return (
        <Card className="expense-date">
            <div className="expense-date__day">{dayOfMonth}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </Card>
    );
}

export default ExpenseDate;