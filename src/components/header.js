import React from "react";
import Logo from "../imgs/uncc.png"
const styles = {
    font : {
        color: "white",
        backgroundColor: "#1a472b",
        padding: "15px"
    },
    size: {
        fontSize: "30px",
    },
    main: {
        backgroundColor: "#b5a66b",
        color: "#1a472b",
        padding: "50px"
    },
    img: {
        marginBottom: "25px"
    },
    h3: {
        color: "white"
    },
    hat: {
        color: "#b5a66b"
    }

}
function Header() {
    return (
        <div className="text-center">
            <nav style={styles.font}>
                <span style={styles.size} className="navbar-brand mb-0 h1"><i style={styles.hat} class="fas fa-graduation-cap"></i> UNC Charlotte Bootcamp</span>
            </nav>
            <div style={styles.main} className="text-center">
            <img style={styles.img} src= {Logo} alt="UNC Charlotte"/>
              <h1>2020 UNCC Bootcamp Classroom Database</h1>  
              <h3 style={styles.h3}>A place to keep track of all your classmates contact info</h3>
            </div>
             
        </div>

    );
}

export default Header;