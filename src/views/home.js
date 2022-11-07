import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Future Metrics Assistant</title>
        <meta property="og:title" content="Future Metrics Assistant" />
      </Helmet>
    </div>
  )
}

export default Home
