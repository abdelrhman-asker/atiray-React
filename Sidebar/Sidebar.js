import React from 'react'
import "../index.css";

const Sidebar = () => {
  return (
    <div>


<section class="Rightnav container col-4">
    <div class="transparentDiv" onclick="RemoveNavS()"></div>

<div class="MainIconDiv">
    <i class="fa-solid fa-xmark MainIcon" onclick="RemoveNavS()"></i>
</div>
<div>
    <span>PREFRENCES</span>
</div>
<a href="#" class="RightnavFlexOFLex">
<div class="RightnavFlexOFLex">
    <div><h3>Dark Mode</h3></div>
    <div><span>Off</span></div>
</div></a>
<a href="#" class="RightnavFlexOFLex">
<div class="RightnavFlexOFLex">
    <div><h3>Safesearch</h3></div>
    <div><span>Off</span></div>
</div></a>
<a href="#" class="RightnavFlexOFLex">
<div class="RightnavFlexOFLex" >
    <div><h3>Language</h3></div>
    <div><span>English (US)</span></div>
</div></a>
<a href="#">
<div><h3>More Settings</h3></div></a>

<div><span>WHO ARE WE</span></div>
<a href="#">
<div><h3>Privacy Policy</h3></div></a>
<a href="#">
<div><h3>Contact Us</h3></div></a>
<a href="#">
<div><h3>About Us</h3></div></a>
<a href="#">
<div><h3>Terms of Sevice </h3></div></a>



</section>
    </div>
  )
}

export default Sidebar
