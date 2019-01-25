import React from 'react'
import Profile from '../components/profile'
import Social from '../components/social';

const Index = () => (
  <React.Fragment>
    <link href="/static/nes.css" rel="stylesheet" />
    <link href="/static/index.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />

    <section style={{margin: "15px"}}>
      <header>
        <h1>Luca Bruzzone</h1>
        <p>This is a brief summary of what I do</p>
      </header>
      <Profile />
      <Social />
    </section>
  </React.Fragment>
)

export default Index