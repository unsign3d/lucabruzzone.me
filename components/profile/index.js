import React from 'react'

const Profile = () => (
  <section className="nes-container with-title">
    <h2 className="title">Profile</h2>
    <div className="float-containers">
      <section className="nes-container with-title small-containers">
        <h2 className="title">Backend</h2>
        <ul>
          <li>Ruby on Rails</li>
          <li>Node.js</li>
          <li>Microservices / SOA / Monoliths (yes that too)</li>
        </ul>
      </section>
      <section className="nes-container with-title small-containers">
        <h2 className="title">Frontend</h2>
        <ul>
          <li>React, Redux, next.js, other cool frameworks</li>
          <li>Modern Javascript</li>
          <li>CSS, SASS, BEM, styled component</li>
        </ul>
      </section>
      <section className="nes-container with-title small-containers">
        <h2 className="title">Infrastructure</h2>
        <ul>
          <li>AWS services, DigitalOcean, Raspberry PI at home doing stuff</li>
          <li>Terraform</li>
          <li>Ansible</li>
        </ul>
      </section>
    </div>
  </section>
)

export default Profile