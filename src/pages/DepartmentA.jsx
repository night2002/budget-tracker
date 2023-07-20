import React from 'react'
import './Department.css'
import ChartA from './ChartA'
function DepartmentA() {
  return (
    <div className="bg">
      <h1 className="department-title">Department A</h1>
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
        <p>₹4,45,000</p>
        <p>₹2,26,000 </p>
        <p>₹1,50,000</p>
        <p>₹11,47,000</p>
        <p className='p'>₹35,26,000</p>
        </div>
        </div>
        </div>
        </div>
        <div className="requests">Chart
        <ChartA/>
        </div>
      </div>
    </div>
  )
}


export default DepartmentA