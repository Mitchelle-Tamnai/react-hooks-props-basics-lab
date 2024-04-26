import React from "react";

function Links(props) {
    return (
        <>
            <h3>Links</h3>
            <a href="Github">{props.github}</a>
            <a href="Linkedin">{props.linkedin}</a>
        </>
    )
    
}

export default Links