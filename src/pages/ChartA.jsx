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
export default function ChartA() {
    const data = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Sales generated',
            data:[3526000,3324000,3126000,3626000,3762000,3726000,3626000,3826000,4026000,3926000,3826000,3526000],
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
