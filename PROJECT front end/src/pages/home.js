import React,{useState} from "react";
import {Link} from 'react-router-dom';
import { NavLink } from "react-router-dom";
import {
    FaBars
} from "react-icons/fa";
import {HiHome} from "react-icons/hi";

import {MdOutlineWorkspacePremium} from "react-icons/md";
import {GoReport} from "react-icons/go";
import {AiFillHeart} from "react-icons/ai";
import {BiSolidPlaylist} from "react-icons/bi";


const SideBar = ({children}) => {
    const [isOpen,setIsOpen]=useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/home",
            name:"Home",
            icon:<HiHome/>
        },
       
        {
            path:"/premium",
            name:<Link to='/premium'>"Premium"</Link>,
            icon:<MdOutlineWorkspacePremium/>
        },
        {
            path:"/liked",
            name:<Link to='/liked'>"Liked Songs"</Link>,
            icon:<AiFillHeart/>
        },
        {
            path:"/playlist",
            name:<Link to='/playlist'>"Playlists"</Link>,
            icon:<BiSolidPlaylist/>
        },
       
        {
            path:"/feedback",
            name:"Feedback",
            icon:<GoReport/>
        }
    ]
   
    return(
      
        <div className="container">
            {/* <Home/> */}
            


            <div style={{width:isOpen ? "300px" : "50px"}}className="sidebar">

                <div className="top_section">
                    <h1 style={{display:isOpen ? "block" : "none"}}className="logo">MUSIC</h1>
                    <div style={{marginLeft:isOpen ? "0px" : "-15px"}}className="bars">
                        <FaBars onClick={toggle}/>
                       
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display:isOpen ? "block" : "none"}}className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
               
            </div>
            <main>{children}</main>
            <div className="asd"></div>
        </div>
        
       
    );
};
export default SideBar;