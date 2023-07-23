import React, { useState } from "react";

function Footer(props) {
    // const [isDone, setIsDone]= useState(false);

    // function handleClick()
    // {
    //     setIsDone(prevValue => {return !prevValue;})
    // }
   
    return (<div onClick={()=>props.deltu(props.id)}>
        {/* <li style={{ textDecoration :isDone? 'line-through':'none' }}> {props.text} </li> */}
        <li >{props.text} </li>
    </div>);
}
export default Footer;