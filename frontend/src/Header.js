import React from 'react';

//export default function Header() {
/*function Header(props) {
    return (
        <header>
            <h1>{props.children}</h1>
        </header>
    );
}*/

function Header({ children }) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

export default Header;