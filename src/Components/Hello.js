// functional or stateless components 
import React from 'react';

const Hello = () => {
    // functional component way using jsx
    // return (
    //     <div className="dummyClass" id="hello">
    //         <h1>Hello Joshua Cheng</h1>
    //     </div>
    // )
    // return React.createElement('div', null, 'h1', 'Hello Joshua Cheng');

    // alternative way to create the same element but with using documents.createElement // note that you will ned multiple function calls
    // functional component way using React.createElement
    return React.createElement('div', 
        {id: 'hello', className: 'dummyClass'}, // or this can be null too // className 
        React.createElement('h1', null, 'Hello Joshua Cheng')
    );
}

export default Hello;