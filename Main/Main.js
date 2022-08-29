import React from 'react'
import "../index.css";


const Main = () => {
  return (
    <div className='MainBg'>
      
      <div className='wrapper'>
      <h1 class="mb-3">Heading</h1>
                <h4 class="mb-3">Subheading</h4>
                  <div className='search-input'>
                    <a href="https://atiray.com/" target="_blank" ></a>
                    <input id="myInput" type="text" placeholder="Type to search.." />
                    <div className="autocom-box on">
                      {/* <!-- here list are inserted from javascript --> */}
                    </div>
                    <div className="icon" id="iconSearch"><i class="fas fa-search"></i></div>
                  </div>
                </div>
    </div>
  )
}

export default Main