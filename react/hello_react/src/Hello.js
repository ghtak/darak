import React from 'react'

/*
function Hello({children}){
    return (<div>
        <p>Hello React</p>
        {children}
    </div>);
}
*/

function Hello({ color, name, isSpecial, children }) {

    return (
        <div style={{ color }}>
            {/*
                { ==> js expression
                    {color} ==> object
                }
            */}
            {isSpecial ? <b>*</b> : null}
            <p>Hello React</p>
            {children}
            <p>name : {name}</p>
        </div>);
}

Hello.defaultProps = {
    color: "grey",
    name: "default name"
}

export default Hello;