import React from 'react'
import EmployeeListItem from './EmployeeListItem';

function EmployeeList({ staff }) {
  return (
    <>
      {staff.map((worker)=>{
        return <EmployeeListItem info={worker} /> 
      })}
    </>
  );
}

export default EmployeeList