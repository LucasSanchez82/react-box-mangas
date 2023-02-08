import axios from 'axios';
import { useEffect, useState } from 'react';
import downloadArrayToJson from './components/fonctions/downloadArrayToJson.js';

const options = {
  method: 'GET',
  url: 'https://anime-db.p.rapidapi.com/anime',
  params: {
    page: '1',
    size: '999999',
    search: 'Fullmetal',
    genres: 'Fantasy,Drama',
    sortBy: 'ranking',
    sortOrder: 'asc'
  },
  headers: {
    'X-RapidAPI-Key': 'a4a698e2f5msh54d02d354035469p1b8090jsnb771336a15de',
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
};



function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response)

        setData(response.data.data);
        console.log(data);
        downloadArrayToJson(data);

      }).catch(function (error) {
        console.log(error);
        setData([
          { link: "google.com", title: "titre1", image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", synopsis: "mon synopsis" },
          { link: "google.com", title: "bleach", image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", synposis: "l'histoire des shinigamis" }
        ]);
        console.log(data)
      });
  }, [])
  return (
    <div className="App">
      <header>
        <h1>Titre de mon projet streaming</h1>
        {
          data.map((el) => (
            <div className="box">
              <a href={el.link}>
                <h3>{el.title}</h3>
                <img src={el.image} alt={"image " + el.title} />
                <p>{el.synopsis}</p>
              </a>
            </div>
          ))
        }
      </header>
    </div>
  );
}

export default App;
