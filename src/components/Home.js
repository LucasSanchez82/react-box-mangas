import { useEffect, useState } from 'react';
import axios from 'axios';
import DownloadArrayToJsonBtn from './DownloadArrayToJsonBtn';
import dataJson from "./../data/data.json"
import Searchbar from './Searchbar';
import Box from './Box';


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
                    setData([
                        { link: "google.com", title: "titre1", image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", synopsis: "mon synopsis" },
                        { link: "google.com", title: "bleach", image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", synposis: "l'histoire des shinigamis" }
                    ]);
                });
        }
    }, [])

    return (
        <div>
            <header>
                <h1>Titre de mon projet streaming</h1>

            </header>
            <Searchbar />
            <DownloadArrayToJsonBtn data={data} />
            <Box data={data} />
        </div>
    );
};

export default Home;