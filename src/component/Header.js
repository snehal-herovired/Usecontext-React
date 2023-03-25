import React from 'react';
import Title from './Title';
import Searchbox from './Searchbox';
const Header = ({a}) => {
    return (
        <div>
            <Title a={a} />
            <Searchbox/>
        </div>
    );
}

export default Header;
