import React from 'react';

function Table(props) {
  const styles = {
    container: {
      backgroundColor: "#007E33",
      minWidth: "100vw",
      minHeight: "100vh"
    },
    table: {
      color: "#007E33",
      paddingBottom: "100vh"
    }
  }
    return (
      <div style={styles.container} >
        <div className="container">
        <table style={styles.table} className="table table-striped table-warning">
          <thead>
            <tr>
              <th scope="col" onClick={()=>props.handleSort("id")}>id</th>
              <th scope="col" onClick={()=>props.handleSort("first")}>First</th>
              <th scope="col" onClick={()=>props.handleSort("last")}>Last</th>
              <th scope="col" onClick={()=>props.handleSort("role")}>Role</th>
              <th scope="col" onClick={()=>props.handleSort("email")}><i class="fas fa-envelope-square"></i> Email</th>
              <th scope="col" onClick={()=>props.handleSort("phone")}><i class="fas fa-phone-square"></i> Phone</th>
              <th scope="col" onClick={()=>props.handleSort("link")}><i class="fab fa-linkedin"></i> LinkedIn</th>
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
                <td>{employee.phone}</td>
                <td>{employee.link}</td>
              </tr>

            ))}
          </tbody>
        </table>

      </div>
      </div>
      
    );
  }




export default Table;