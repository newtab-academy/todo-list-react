import React from 'react';

export default function PageProps(){

    const ComponentA = ({label}) => (
        <div>
            <h1>Hello {label}!</h1>
            <ComponentB label = {label} />
        </div>
    );
    const ComponentB = ({label}) => <h2>Seja bem vindo {label}</h2>

    return (
        <ComponentA label = 'Henrique' />
    );
}