import React, { useEffect, useState } from 'react';
import Boxs from './Boxs';

const Searchbar = (props) => {
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => { setFilteredData(props.data) } //chargement au demarrage de la page
        , [props.data]);

    const handleChange = (e) => {
        setFilteredData(props.data.filter(el => el.title.toUpperCase().includes(e.target.value.toUpperCase())));
    }
    return (
        <div className='content'>
            <input placeholder='Ex: Naruto...' onChange={handleChange} type="text" name="searchbar" id="searchbar" />
            <Boxs data={filteredData} />
        </div>
    );
};

export default Searchbar;
