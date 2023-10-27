import  React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

function Proteced(props){
//     const history = useNavigate();
//     useEffect(()=>{
//         if(localStorage.getItem('user-info'))
//         {
//             history("/signup")
//         }
//    })
    let Cmp=props.Cmp;
    return(
        <div>
            <Cmp/>
        </div>
    );
}

export default Proteced;
