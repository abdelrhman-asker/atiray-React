import React from 'react'
import "../index.css";

const Footer = () => {
  return (
    <div>
      
      <footer class="container-fluid col-12 Mfooter">
        <div class="footerLeft container col-8 col-md-4">
            <div class="col-3">
                <a href="#">About</a>
            </div>
            <div class="col-3">
                <a href="#">Contact</a>
            </div>
            <div class="col-3">
                <a href="#">Terms</a>
            </div>
            <div class="col-3"> 
                <a href="#">Privacy</a>
            </div>
        </div>



        <div class="Based col-4">© Based 2022.
        </div>

      </footer>
    </div>
  )
}

export default Footer