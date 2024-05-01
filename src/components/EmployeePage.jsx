import React from 'react'
import Header from './Header'
import Selector from './Selector'

function EmployeePage({title}) {
  return (
    <div className="emp_page">
      EmployeePage
      <Header topic={title}/>
    <div className='topContainer'>
      <img src="" alt="" className="profile" />
      <div className='infoBox'>
        <p>Julie Taylor</p>
        <p>VP MARKETING</p>
      </div>
    </div>
      <Selector />
      <Selector />
      <Selector />    
    </div>
  )
}


export default EmployeePage