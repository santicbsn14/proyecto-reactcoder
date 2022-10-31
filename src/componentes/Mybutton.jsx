import React from 'react';

import "./mybutton.css";
function MyButton(props){
    return <button className="btn">{props.text}</button>
}
export default MyButton