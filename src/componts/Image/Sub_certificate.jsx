import React from "react";

const projext_width = {
    color : "aliceblue", 
    margin : "Auto",
    
}

const Project_sub = (Props) => {

    return (
        <>
            <div class="card" style={projext_width}>
                <img src={Props.logo} class="card-img-top" alt="Image Alt Text" />
            </div>
        </>
    )
}


export default Project_sub