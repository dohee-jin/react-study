import React from 'react';
import ChartBar from './ChartBar.jsx';
import './Chart.css';

const Chart = ({dataPoints}) => {

    const totalValue = dataPoints.reduce((acc, dp) => acc + dp.value, 0);
    /*const getTotalValue = () => {
        let total = 0;
        for (const dp of dataPoints) {
            total += dp;
        }
        return total;
    }*/

    return (
        <div className='chart'>
            {
                dataPoints.map(dp =>
                    <ChartBar
                        key={dp.label}
                        label={dp.label}
                        currentmonthValue={dp.value}
                        totalValue={totalValue}
                    />)
            }
        </div>
    );
};

export default Chart;