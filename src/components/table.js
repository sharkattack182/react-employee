import React from 'react';

function Table(props) {
  
    return (
      <>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col" onClick={()=>props.handleSort("id")}>id</th>
              <th scope="col" onClick={()=>props.handleSort("first")}>First</th>
              <th scope="col" onClick={()=>props.handleSort("last")}>Last</th>
              <th scope="col" onClick={()=>props.handleSort("role")}>role</th>
              <th scope="col" onClick={()=>props.handleSort("email")}>email</th>
            </tr>
          </thead>
          <tbody>
            {props.state.classList.map(employee=> (
             
              <tr>

                <th scope="row">{employee.id}</th>
                <td>{employee.first}</td>
                <td>{employee.last}</td>
                <td>{employee.role}</td>
                <td>{employee.email}</td>
              </tr>

            ))}
          </tbody>
        </table>

      </>
    );
  }




export default Table;