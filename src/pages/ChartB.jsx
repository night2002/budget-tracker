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
export default function ChartB() {
    const data = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Sales generated',
            data:[1114000,1214000,1314000,1514000,1814000,2014000,1814000,1214000,1514000,1414000,1314000,1714000],
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
