import React, { useEffect, useState } from 'react'
import './Player.css'
import {useNavigate, useParams} from 'react-router-dom'
import arrow_back from '../../assets/arrow-back.png'

const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate()

  const [apiData,setApiData] = useState({
    name : '',
    key :'',
    published_at: '',
    typeof:''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDQwOTEwMGI2ZDNhODIwYTA5OTYyMTg4NzBiNDNjMCIsIm5iZiI6MS43NDYzNDk2MTcxMjMwMDAxZSs5LCJzdWIiOiI2ODE3MmUzMTkzYTlmODRmZWE1N2M4MDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.JbJH9FZ-mWtwy0dZ2zxHJLGm2xS7DzrVmbZ9gI_IsK8'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  
  },[])
  
  return (
    <div className='player'>
      <img src={arrow_back} alt="back"  onClick={()=>navigate(-2)}/>
      <iframe width='90%' height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameborder="0" title='trailer' allowFullScreen></iframe>

        <div className="player-info">
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.typeof}</p>

        </div>
    </div>
  )
}

export default Player