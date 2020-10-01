import React from "react";

const styles = {
    font : {
        color: "#1a472b",
        backgroundColor: "#b5a66b",
        padding: "15px"
    },
    size: {
        fontSize: "20px",
    },
    hat: {
        color: "#1a472b"
    }

}
function Header() {
    return (
        <div className="text-center">
            <nav style={styles.font}>
                <span style={styles.size} className="navbar-brand mb-0 h1"><i style={styles.hat} class="fas fa-graduation-cap"></i> UNC Charlotte Bootcamp</span>
            </nav>
           
        </div>

    );
}

export default Header;