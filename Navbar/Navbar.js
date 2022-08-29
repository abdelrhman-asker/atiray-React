import React from 'react'
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = (Props) => {
  return (
    <div>
      <nav class="navbar navbar-expand  navbar-light bg-transparent fixed-top d-block">
          <div class="container-fluid ">
            
            <div class="collapse navbar-collapse col-10" id="">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item activeLink active col-2">
                  <a class="nav-link " aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item col-3">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item col-3">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item dropdownLi ms-0 col-2">
                    <div class="dropdown">
                        <button class="btn dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </div>
                </li>
                
                      <FontAwesomeIcon icon={faBars} className="OpenSideBar" ></FontAwesomeIcon>
                      
              </ul>
            </div>
          </div>
        </nav>







    </div>
  )
}

export default Navbar