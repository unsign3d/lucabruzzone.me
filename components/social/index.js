import React from 'react'

const containerCss = { marginTop: '15px' }

const socialCss = { marginLeft: '5px', marginRight: '5px' }

const socials = [
  { name: 'facebook', link: 'https://www.facebook.com/unsign3d' },
  { name: 'twitter', link: 'https://www.twitter.com/unsign3d' },
  { name: 'medium', link: 'https://medium.com/@unsigned' },
  { name: 'github', link: 'https://www.github.com/unsign3d' },
]

const Social = () => (
  <section className="nes-container with-title" style={containerCss}>
    <h2 className="title">You can find me here</h2>
    <div>
      { 
        socials.map(social => (
          <a href={social.link} target="_blank">
            <i class={`nes-icon ${social.name} is-large`} style={socialCss} />
          </a>
        ))
      }
    </div>
  </section>
)

export default Social