import { useEffect, useState } from 'react';
import axios from 'axios';
import DownloadArrayToJsonBtn from './DownloadArrayToJsonBtn';
import dataJson from "./../data/data.json"
import Searchbar from './Searchbar';


const options = {
    method: 'GET',
    url: 'https://anime-db.p.rapidapi.com/anime',
    params: {
        page: '1',
        size: '9999999',
        sortBy: 'ranking',
        sortOrder: 'asc'
    },
    headers: {
        'X-RapidAPI-Key': 'a4a698e2f5msh54d02d354035469p1b8090jsnb771336a15de',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
};
const Home = () => {
    const [data, setData] = useState([])



    useEffect(() => {
        if (dataJson) {
            setData(dataJson)
        } else {
            axios
                .request(options)
                .then(function (response) {
                    console.log(response)

                    setData(response.data.data);
                    console.log(data);

                }).catch(function (error) {
                    console.log(error);
                });
        }
    }, [data])

    return (
        <div>
            <header>
                <h1>Titre de mon projet streaming</h1>

            </header>
            <Searchbar data={data} />
            <DownloadArrayToJsonBtn data={data} />
        </div>
    );
};

export default Home;