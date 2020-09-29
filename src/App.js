import React from 'react';
import employees from './utils/employees.json';
import './App.css';

class App extends React.Component {

  state = {
    classList: employees,
    sortOrder: ""
  }
  handleSort = () => {
    console.log("test")
  }
  render() {
    return (
      <>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col" onClick={()=>this.handleSort()}>role</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.classList.map(employee=> (
             
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

}


export default App;
