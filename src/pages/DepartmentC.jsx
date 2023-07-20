import React from 'react'
import './Department.css'
import ChartC from './ChartC'
function DepartmentC() {
  return (
    <div className="bg">
      <h1 className="department-title">Department C</h1>
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
        <p>₹1,25,000</p>
        <p>₹2,46,000 </p>
        <p>₹6,12,000</p>
        <p>₹3,25,000</p>
        <p className='p'>₹25,32,000</p>
        </div>
        </div>
        </div>
        </div>
        <div className="requests">Chart
        <ChartC/>
        </div>
      </div>
    </div>
  )
}


export default DepartmentC