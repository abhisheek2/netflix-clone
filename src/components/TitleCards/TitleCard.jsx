import React, { useEffect, useRef, useState } from 'react';
import './TitleCard.css';
import card_data from '../../assets/card/Cards_data';
import { Link } from 'react-router-dom';

const TitleCard = ({ title, catagory }) => {
  const cardsRef = useRef(null);
  const [apiData, setApiData] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDQwOTEwMGI2ZDNhODIwYTA5OTYyMTg4NzBiNDNjMCIsIm5iZiI6MS43NDYzNDk2MTcxMjMwMDAxZSs5LCJzdWIiOiI2ODE3MmUzMTkzYTlmODRmZWE1N2M4MDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.JbJH9FZ-mWtwy0dZ2zxHJLGm2xS7DzrVmbZ9gI_IsK8'
    }
  };



  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    const ref = cardsRef.current;

    fetch(`https://api.themoviedb.org/3/movie/${catagory?catagory:'now_playing'}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));


    ref.addEventListener('wheel', handleWheel, { passive: false });

  }, []);

  return (
    <div className='title-card'>
      <h2> {title ? title : 'Popular On Netflix'} </h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
