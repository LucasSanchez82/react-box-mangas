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
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const loadDatas = () => {
        setLoading(true);
        axios
            .request(options)
            .then(function (response) {
                setLoading(false);

                setData(response.data.data);
                window.localStorage.setItem("data", JSON.stringify(data));

            }).catch(function (error) {
                console.log(error);
            });
        console.log("données de l'api chargées");
        setLoaded(true);
    }
    useEffect(() => {
        if (dataJson) {
            setData(dataJson)
        } else {
            loadDatas();
        }
    })

    return (
        <div>
            <header>
                <h1>Titre de mon projet streaming</h1>
            </header>
            <input type="button" value="charger les donnees" onClick={loaded ? console.log("") : () => (prompt("mot de passe") === "Btssio82300" ? loadDatas() : alert("Faux, vueillez ne pas surcharger inutilement le serveur"))} className={(loading ? "loading-btn" : "not-loading-btn") + (loaded ? " loaded-btn" : "")} />
            <DownloadArrayToJsonBtn data={data} />
            <Searchbar data={data} />
        </div>
    );
};

export default Home;