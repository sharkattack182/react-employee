import React from "react";

function Search(props) {
  const styles = {
    main: {
      backgroundColor: "#1a472b",
      padding: "20px"
    },
    label: {
      fontSize: "20px",
      color: "#b5a66b"
    },
    column: {
      marginLeft: "auto",
      marginRight: "auto"
    },
    row: {
      maxWidth: "100vw",
      backgroundColor: "#1a472b"
    },
    button: {
      backgroundColor: "#b5a66b"
    }
  }

  return (
    <div style={styles.row} className="row text-center">
      <div style={styles.column} className="col-6">
        <form style={styles.main}>
          <div className="form-group">
            <label style={styles.label} htmlFor="search">Search for someone in your class:</label>
            <input
              onChange={e => props.handleInputChange(e)}
              value={props.search}
              name="first"
              type="text"
              className="form-control"
              placeholder="Search Classmates"
              id="search"
            />
            {/* <button style={styles.button} onClick={props.handleFormSubmit} className="btn mt-3">
            <i class="fas fa-search"></i>
          </button> */}
          </div>
        </form>
      </div>
    </div>


  );
}

export default Search;