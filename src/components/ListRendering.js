//RENDERING LIST FROM AM ARRAY 1

//import React from "react";
// function ListRendering(props) {
//     const name = ['Clark', 'Bruce']
//     return (
//         <div>
//             <h2>{name[0]}</h2>
//             <h2>{name[1]}</h2>
            
//         </div>
//     );
// }
// export default ListRendering;


//RENDERING LIST FROM AM ARRAY 2

//import React from "react";
// function ListRendering(props) {
//     const name = ['Clark', 'Bruce']
//     return (
//         <div>
//             {name.map(name => <h2>{name}</h2>)}
//         </div>
//     );
// }


// RENDERING LIST FROM AN ARRAY 3

// import React from "react";
// function ListRendering(props) {
//     const names = ['Clark', 'Bruce']
//     const nameList = names.map(name => <h2>{name}</h2>)
//     return (
//         <div>
//             {nameList}
//         </div>
//     );
// }

// export default ListRendering;



//RENDERING LIST FROM AN OBJECT 1

//import React from "react";
// function ListRendering(){
    
//     const persons = [
//         {
//             id:1,
//             name:'Clark'
//         },
//         {
//             id:2,
//             name:'Bruce'
//         }
//     ]
//     const NameList = persons .map(person=><h2> My name is {person.name} with id {person.id}</h2>)
//     return (
//         <div>
//             {NameList}
//         </div>
//     )
// }
// export default ListRendering;





//RENDERING LIST FROM AN OBJECT
//WORKS WITH LR2
//WITH A KEY TO MAKE EACH LIST UNIQE

import React from "react";   
import LR2 from "./LR2";
function ListRendering(){

    const persons = [
        {
            id:1,
            name:'Clark'
        },
        {
            id:2,
            name:'Bruce'
        }
    ]
        const NameList = persons.map((person,index)=> <LR2 key={index} person={person}/>)
    return (
        <div>
            {NameList}
        </div>
    )

    //AN OBJECT OR ARRAY CAN USE INDEX AS THE KET(KEY={INDEX}) 
    
    // const names = ['Clark','Bruce']
    // const NameList = names.map((name,index) => <h2 key={index}>{name}</h2>)
    // return (
    //     <div>
    //         {NameList}
    //     </div>
    // )
}
export default ListRendering;




