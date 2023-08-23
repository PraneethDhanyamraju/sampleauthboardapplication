            import React from "react";
            import { signOut } from 'next-auth/react';

            import dashboard from "./icons/dashboard_icon.png";
            import transaction from "./icons/transaction_icon.png";
            import schedules from "./icons/schedule_icon.png";
            import settings from "./icons/setting_icon.png";
            import users from "./icons/user_icon.png";
            import Image from 'next/image'

            export default function Navbar(){
                return <div className="main" >
                        <div className="hamburger" id="hamb" onClick={()=>{
                        document.getElementById("navbar").classList.toggle("toggle")
                        
                    }}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                <div className="board-navbar" id="navbar">
                <div className="navbar-heading"><h2>Board.</h2></div>
                    <div className="navbar-links">
                    <div className="navbar-title"><Image className="navbar-icons" src={dashboard} alt="dashboard"/><a className="link" href="">Dashboard</a></div>
                        <div className="navbar-title"><Image className="navbar-icons" src={transaction} alt="transactions"/><a className="link" href="">Transactions</a></div>
                        <div className="navbar-title"><Image className="navbar-icons" src={schedules} alt="schedules"/><a className="link" href="">Schedules</a></div>
                        <div className="navbar-title"><Image className="navbar-icons" src={users} alt="users"/><a className="link" href="">Users</a></div>
                        <div className="navbar-title"><Image className="navbar-icons" src={settings} alt="settings"/><a className="link" href="">Settings</a></div>
                        <div className="navbar-title"><Image className="navbar-icons" src="data:image/png;base64,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" width="25" height="25" alt="logout"/><a className="link logout " onClick={()=>{signOut("google",{fallBackUrl:"/",redirect:"true"})}}>Logout</a></div>
                
                    </div>
                    <div className="navbar-footer">
                        <div className="help"><a className="linkk" href="/">Help</a></div>
                        <div className="contact-us"><a className="linkk" href="/">Contact Us</a></div>
                        
                    </div>
                </div>
                </div>
            }
