import React from 'react';

const Searchbar = () => {
    return (
        <input onChange={(e) => console.log(e)} type="text" name="searchbar" id="searchbar" />
    );
};

export default Searchbar;