import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
    const expensesAmount = props.data.map(cur => cur.value);

    const maxValue = Math.max(...expensesAmount);
    return (
        <div className="chart">
            {props.data.map(cur => 
                <ChartBar 
                    key={cur.label }
                    value={ cur.value}
                    label={cur.label }
                    max={ maxValue }
                />
            )}
        </div>
    )
}

export default Chart;