import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Video Conferencing Platform</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#3b82f6" }}>Connect</span> with your loved Ones</h1>

                    <p>Connect instantly with people using real-time video communication</p>
                    <div role='button'>
                        <Link to={"/auth"}>Start Meeting</Link>
                    </div>
                </div>
                <div>

                    <img src="/mobile.png" alt="" />

                </div>
            </div>
                   <p style={{
      position: "absolute",
      bottom: "10px",
      left: "20px",
      color: "white",
      fontSize: "14px"
    }}>
      Developed by Darshan Ghorpade & Misba Saba
    </p>


        </div>
    )
}
