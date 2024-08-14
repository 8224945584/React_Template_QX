import React from 'react'
import "./Nav.css"
function Navbar() {
  return (
   <>
   <div className="video">
   <video width ="100%" autoPlay loop muted src="https://aiko.bold-themes.com/main-demo/wp-content/uploads/sites/4/hero_video.mp4"></video>
  <div className="data">
  <span><h3><i>QX LAB AI</i> </h3></span>
   <span><h1>WORLD'S FIRST HYBRIDAGI</h1></span>
   <span><h1>AGI PLATEFORM</h1></span>
  </div>
   
   </div>
   <div className="nav">
    <div className="logo">
        <img src="https://www.qxlabai.com/wp-content/uploads/2023/12/logo.png" alt="logo" />
    </div>
    <ul>
        <li>HOME</li>
        <li>ASK QX</li>
        <li>OUR TEAM</li>
        <li>SAFETY GUILDLINES</li>
        <li>CONTACT US</li>
    </ul>
    <div className="button">
        <button>TRY ASK QX</button>
    </div>
   

   </div>
   <div className="btn2">
        <button><span><h2>EXPERIENCE ALL EXCELLENCE TODAY</h2></span></button>
    </div>


   </>
  )
}
export default Navbar
