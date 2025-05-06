import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import banner from '../../assets/banner.png'
import play_btn from '../../assets/play_btn.svg'
import info from '../../assets/info.png'
import TitleCard from '../../components/TitleCards/TitleCard'
import Footer from '../../components/Footer/Footer'



const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <h3 className='caption-title'>The Monkey</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quos voluptatibus? Est beatae illum, pariatur minus magni earum dignissimos dolores sit! Iusto nam obcaecati culpa quia corrupti voluptas omnis fugit?</p>

          <div className="hero-btns">
            <button className='btn'><img src={play_btn} alt="Play" />Play</button>
            <button className='btn dark-btn'><img src={info} alt="info_icon" />More info</button>
          </div>
          <div className="titlecard-wrapper">
            <TitleCard />
          </div>

        </div>
      </div>
      <div className="more-cards">
        <TitleCard title={"Blockbuster Movies"} catagory={'top_rated'} />
        <TitleCard title={"Only on Netflix"} catagory={'popular'} />
        <TitleCard title={"Upcoming"} catagory={'upcoming'} />
        <TitleCard title={"Top Movies for You"} catagory={'now_playing'} />
      </div>

      <Footer />

    </div>
  )
}

export default Home