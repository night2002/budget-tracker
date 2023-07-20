import React, { useState } from 'react'
import './Homepage.css'
import DepartmentA from './DepartmentA'
import DepartmentB from './DepartmentB'
import DepartmentC from './DepartmentC'
import DepartmentD from './DepartmentD'
export default function Homepage() {
  const [department,setdepartment]=useState('DepartmentA')
  const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
      setIsActive(current => !current);
    };

  const switchComponent=()=>{
    switch(department){
        case 'DepartmentA':
            return <DepartmentA department={department}/>
        case 'DepartmentB':
            return <DepartmentB department={department}/>
        case 'DepartmentC':
            return <DepartmentC department={department}/>
        case 'DepartmentD':
              return <DepartmentD department={department}/>
        default:
            return <DepartmentA department={department}/>
    }
}

  return (
      <>
      <div className="home-page">
      <h1 className='main-title'>Budget Tracker</h1>
      <div className="main-container">
      <div className='departments'>
      <div className="department">
        <button className='butt'onClick={()=>{
          setdepartment('DepartmentA')
          handleClick  
          }}>Department A
        </button>
      </div>
      <div className="department">
      <button className='butt'onClick={()=>{
          setdepartment('DepartmentB')
          handleClick()
          }}>Department B
        </button>
      </div>
      <div className="department">
      <button className="butt"onClick={()=>{
          setdepartment('DepartmentC')
          }}>Department C
        </button>
      </div>
      <div className="department">
      <button className="butt"onClick={()=>{
          setdepartment('DepartmentD')
          }}>Department D
        </button>
      </div>
      </div>
      <div className="department_data">
      {switchComponent()}
      </div>
      </div>
      </div>
      </>
  )
}
