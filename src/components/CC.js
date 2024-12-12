//WORKS WITH THE PARENT COMPONENT

// import React from "react";
// import PP from "./PP";

// function CC(props) {
//     return ( 
//         <div>
//             {/*DISPLAYING THE METHOD WHEN THE BUTTON IS CLICKED */}
//             <button onClick={props.handller}>GREET ME</button>
//         </div>
//     );
// }

// export default CC


//CHANGING THE ONCLICK TO MAKE IT POSSIBLE TO ADD A CHILD BY MAKING IT AN ARROW FUNCTION

import React from "react";

function CC(props) {
    return ( 
        <div>
            <button onClick={()=> props.handller("Obuasi")}>GREET ME</button>
        </div>
    );
}

export default CC