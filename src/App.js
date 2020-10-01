import React from 'react';
import Header from './components/header';
import Search from './components/search';
import Table from './components/table';
import Footer from './components/footer';
import './App.css';
import employees from './utils/employees.json';


class App extends React.Component {

  state = {
    classList: employees,
    shadowClassList: employees,
    sortOrder: "",
    search: ""
  }
  handleSort = (sortCritera) => {
    console.log("sorted successfully")
    let newSort
    if(this.state.sortOrder !== "des") {
        newSort= this.state.classList.sort(function(a, b) {
            return a[sortCritera] - b[sortCritera];
          });

    }
    else {
        newSort= this.state.classList.sort(function(a, b) {
            return b[sortCritera] - a[sortCritera];
          });
    }
    console.log(newSort)
    const newSortOrder = this.state.sortOrder ==="des"? "asc":"des"
    this.setState({ classList: newSort, sortOrder: newSortOrder })
  }

  handleInputChange = event => {
    let value = event.target.value.toLocaleLowerCase().split("");
    if(value.length === 0){
      this.setState({
        classList: this.state.shadowClassList //need to create a new array and set the array to include names matching the value then set state to the new array
      });
    }else {
      const newArray = employees.filter(employee => {
        const comparisonArray = (`${employee.first} ${employee.last}`).toLocaleLowerCase().split("")
        const buildArray = [];
        for(let i=0; i<value.length; i++){
          buildArray.push(comparisonArray[i])
        }
        return buildArray.join("") === value.join("")
      })
      this.setState({
        classList: newArray //need to create a new array and set the array to include names matching the value then set state to the new array
      });
    }

  }

render() {
  return (
    <div className="container-flex">
      <Header />
      <Search handleInputChange={this.handleInputChange}/>
      <Table state={this.state} handleSort={this.handleSort}/>
      <Footer />
    </div>
  )
}

}


export default App;
