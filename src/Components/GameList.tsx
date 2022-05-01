import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GameInterface } from '../Interfaces/Game';

const GameList = () => {
  const [games, setGames] = useState<GameInterface[]>([]);

  const urlGames = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
  const getData = () => {
    axios.request(options).then(function (response) {
      console.log(response.data);
      setGames(response.data);
    }).catch(function (error) {
      // Show Error
      console.error(error);
    });
  };

  const options = {
    method: 'GET',
    url: urlGames,
    headers: {
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      'X-RapidAPI-Key': 'bfe6fb0a02mshca4a386ce6f7864p115292jsn12665c4d9e6d'
    }
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='row pl-2 pr-2 pb-3'>

    </div>
  )
};

export default GameList;