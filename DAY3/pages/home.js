import React from "react";

import { NavLink } from "react-router-dom";
import {
    FaRegChartBar,
    FaTh,
    FaThList,
    FaUserAlt,
    FaCommentAlt,
    FaShoppingBag,
    FaBars
} from "react-icons/fa";
const SideBar = ({children}) => {
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"ProductList",
            icon:<FaThList/>
        }
    ]
    return(
        <div className="full">
        <div className="container">
            <div className="sidebar">
                <div className="top_section">
                    <h1 className="logo">MUSIC</h1>
                    <div className="bars">
                        <FaBars/>
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
        </div>
    );
};
export default SideBar;