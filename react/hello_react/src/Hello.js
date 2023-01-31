import React from 'react'

/*
function Hello({children}){
    return (<div>
        <p>Hello React</p>
        {children}
    </div>);
}
*/

function Hello(props) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };
    return (
        <div style={style}>
            <p>Hello React</p>
            {props.children}
            <p>name : {props.name}</p>
        </div>);
}

Hello.defaultProps = {
    name: "default name"
}

export default Hello;