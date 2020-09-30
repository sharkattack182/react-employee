import React from "react";

function Search(props) {


    return (
        <form>
        <div className="form-group">
          <label htmlFor="search">Search for Employee:</label>
          <input
            onChange={e => props.handleInputChange(e)}
            value={props.search}
            name="first"
            type="text"
            className="form-control"
            placeholder="Search for an Employee"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
            Search
          </button>
        </div>
      </form>

    );
}

export default Search;