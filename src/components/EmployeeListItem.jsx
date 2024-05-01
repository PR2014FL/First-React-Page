import React from 'react'

function EmployeeListItem({info}) {
  return (
    <div className="emp_li">
      <img src={info.image} alt="" className="profilePic" />
      <div className="txtBox">
          <h3 className="name">{info.name} </h3>
          <p className="name"> {info.position} </p>
      </div>
    </div>
  )
}


export default EmployeeListItem