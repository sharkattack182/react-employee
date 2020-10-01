import React from "react";
const styles = {
    font : {
        color: "#ffbb33",
        backgroundColor: "#007E33",
        padding: "15px"
    },
    size: {
        fontSize: "30px",
    },
    main: {
        backgroundColor: "#ffbb33",
        color: "#007E33",
        padding: "50px"
    }

}
function Header() {
    return (
        <div className="text-center">
            <nav style={styles.font}>
                <span style={styles.size} className="navbar-brand mb-0 h1"><i class="fas fa-graduation-cap"></i> UNC Charlotte Bootcamp</span>
            </nav>
            <div style={styles.main} className="text-center">
              <h1>2020 UNCC Bootcamp Classroom Database</h1>  
              <h3>A place to keep track of all your classmates contact info</h3>
            </div>
             
        </div>

    );
}

export default Header;