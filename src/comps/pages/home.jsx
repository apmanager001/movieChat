import React from 'react'
import Header from '../header'
import Poster from '../poster'
import Events from '../events'
import Movies from '../movies'
import Footer from '../footer'


const Home = () => {
  return (
    <>
        <Header />
        <Poster />
        <Events />
        <Movies />
        <Footer />
    </>
  )
}

export default Home