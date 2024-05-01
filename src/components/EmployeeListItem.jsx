import React from 'react'

function EmployeeListItem({info}) {
  return (
    <div className="emp_li">
      <img src={info.image} alt="" className="profilePic" />
      <div className="txtBox">
          <h3 className="name">Name:  {info.name} </h3>
          <p className="name"> Position: {info.position} </p>
      </div>
    </div>
  )
}


export default EmployeeListItem