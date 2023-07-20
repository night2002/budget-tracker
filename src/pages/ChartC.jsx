import React from 'react'
import {Line} from 'react-chartjs-2'
import './ChartA.css'
import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
)
export default function ChartC() {
    const data = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Sales generated',
            data:[2832000,3032000,2932000,2632000,2432000,2232000,2832000,2532000,1932000,2132000,2232000,2532000],
            backgroundColor: 'aqua',
            borderColor: 'black',
            pointBorderColor:'aqua',
            tension: 0.4

        }]
    }
    const options = {
        plugins:{
            Legend:true,
        },
        scales:{
            y:{
                // min:3,
                // max:6
            }
        }
    }
  return (
    <div className="chartA">
    <Line
        data={data}
        options={options}

    ></Line>
    </div>
  )
}
