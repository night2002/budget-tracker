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
export default function ChartD() {
    const data = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Sales generated',
            data:[3821000,3721000,3421000,3321000,3421000,3521000,3321000,3621000,3421000,3721000,3921000,4021000],
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
