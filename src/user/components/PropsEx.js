import React from 'react';

function PropsEx(props) {
    return (
        
        <div>
            <h1>My Name Is :-{props.text.name}</h1>
            <h1>I Am {props.text.student}</h1>
            <h1>My Classes Name :- {props.data}</h1>
        </div>
    );
}

export default PropsEx;