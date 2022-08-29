import React from 'react'
// Components 
import Navbar from './Navbar/Navbar'
import Main from './Main/Main'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'





const App = () => {
  return (
    <div className='col-12 firstdiv'>
      <Navbar name="Asker Trying" />
      <Main />
      <Sidebar />
      <Footer />

    </div>
  )
}

export default App