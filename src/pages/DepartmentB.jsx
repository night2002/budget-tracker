import React from 'react'
import './Department.css'
import ChartB from './ChartB'
function DepartmentB() {
  return (
    <div className="bg">
      <h1 className="department-title">Department B</h1>
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
        <p>₹2,23,000</p>
        <p>₹1,13,000 </p>
        <p>₹3,26,000</p>
        <p>₹7,31,000</p>
        <p className='p'>₹17,14,000</p>
        </div>
        </div>
        </div>
        </div>
        <div className="requests">Chart
        <ChartB/>
        </div>
      </div>
    </div>
  )
}


export default DepartmentB