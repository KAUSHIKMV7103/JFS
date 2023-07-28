
import React from "react";
import './front.css';
import { Link } from "react-router-dom";
import SideBar from "./home";
import { useSelector } from 'react-redux';
import { selectUser } from "../redux/userslice";


function Home(){
  const user=useSelector(selectUser)
    return (
      <>
      
        <SideBar/>
        <div className="back">
          {/* SideBar  */}
 
        <p id="hads">Welcome :{user.email} </p> 
       
        
         <div className="music-panels">
        <a href="">Recommended Song</a>
        <br />
        <Link to="/music">
          <img
            src="https://res.cloudinary.com/djlak1qdm/image/upload/v1689222280/3-Tamil-2011-20210522203119-500x500_ykdie9.jpg"
            alt="s"
            />
        </Link>
        <Link to="/music10">
          <img
            src="https://res.cloudinary.com/djlak1qdm/image/upload/v1689222682/remo-tamil-poster_146761035140_yk3jbl.webp"
            alt="s"
            />
        </Link>
        <Link to="/music9">
          <img src="https://res.cloudinary.com/djlak1qdm/image/upload/v1689222968/download_k0fads.jpg" />
        </Link>
        <Link to="/music4">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689216037/music/artworks-yspyugkMKTDY-0-t500x500_ysscgg.jpg" />
        </Link>
        <Link to="/music6">
          <img src="https://res.cloudinary.com/djlak1qdm/image/upload/v1689223807/download_2_d8lpfj.jpg" />
        </Link>
        <Link to="/music5">
          <img src="https://res.cloudinary.com/djlak1qdm/image/upload/v1689224031/download_3_agn21v.jpg" />
        </Link>
       
        <br />
        <a href="">Trending Song</a>
        <br />
        <Link to="/music2">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689216165/music/crop_480x480_1687451320_7560380_eodddt.jpg" />
        </Link>
        <Link to="/music3">
          <img src="https://res.cloudinary.com/djlak1qdm/image/upload/v1689228953/download_5_bnlfat.jpg" />
        </Link>
        <Link to="/music7">
          <img src="https://res.cloudinary.com/djlak1qdm/image/upload/v1689229094/download_6_jz2iyp.jpg" />
        </Link>
        <Link to="/music 23">
        <img src="https://res.cloudinary.com/djlak1qdm/image/upload/v1689229386/download_7_k96ktt.jpg" />
        </Link>
        <Link to="/music 23">
        <img src="https://res.cloudinary.com/djlak1qdm/image/upload/v1689229599/images_angups.jpg" />
        </Link>
        <br />
        <a href="">English songs</a>
        <br/>
        <Link to="/music9">
          <img src="https://res.cloudinary.com/djlak1qdm/image/upload/v1689229835/ab67616d0000b273ba5db46f4b838ef6027e6f96_xstcda.jpg" />
        </Link>
        <Link to="/music">
          <img src="https://res.cloudinary.com/djlak1qdm/image/upload/v1689230218/ab67616d0000b273f5542344af0e3db04008f069_tutkqa.jpg" />
        </Link>
        <Link to="/music">
          <img src="https://res.cloudinary.com/djlak1qdm/image/upload/v1689230397/ab67616d0000b273eabddae72a3b1a5ed51d1ac6_rwrjnx.jpg" />
        </Link>
        <Link to="/music2">
          <img src="https://res.cloudinary.com/djlak1qdm/image/upload/v1689230348/download_8_zhkpjh.jpg" />
        </Link>
        <Link to="/music2">
          <img src="https://res.cloudinary.com/djlak1qdm/image/upload/v1689230479/ab67616d0000b2738d04638b6c88c48e80cf6135_cxy30r.jpg" />
        </Link>
        <Link to="/music2">
          <img src="https://res.cloudinary.com/djlak1qdm/image/upload/v1689230552/ab67616d00001e02786e4e2c43c2897fafabbfb6_yaqwx9.jpg" />
        </Link>
      </div>
  
       
       
      
    
    </div>
    </>
    
    )
}
export default Home;