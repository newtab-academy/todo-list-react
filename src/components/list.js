import React from 'react';

export default function List(props){
    return(
        <ul className='todo-list'>
            {
                props.list.map(item => (<li>{item}</li>))
            }
        </ul>
    );
}