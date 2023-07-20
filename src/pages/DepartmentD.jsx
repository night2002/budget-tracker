import React from 'react'
import './Department.css'
import ChartD from './ChartD'
function DepartmentD() {
  return (
    <div className="bg">
      <h1 className="department-title">Department D</h1>
      <div className='container-dept'>
        <div className="div">
        <div className="expenditures">Recurring Expenditures
        <div className="details">
        <div className="names">
        <p>Labour -</p> 
        <p>Utilities -</p>
        <p>Maintenance -</p>
        <p>Rent -</p>
        <p>Sales generated -</p>
        </div>
        <div className="values">
        <p>₹2,13,000</p>
        <p>₹4,21,000 </p>
        <p>₹1,34,000</p>
        <p>₹5,14,000</p>
        <p className='p'>₹40,21,000</p>
        </div>
        </div>
        </div>
        </div>
        <div className="requests">Chart
        <ChartD/>
        </div>
      </div>
    </div>
  )
}


export default DepartmentD