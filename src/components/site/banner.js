import React from 'react'
import '../../assets/css/banner.css'
import omega from '../../assets/images/omega.png'
import Menu from './menu'

const Banner = props => (
  <section className="banner">
    <Menu />
    <div className="banner-content">
      <img src={omega} className="logo" alt="doorway.ai" />
      <div className="title">DOORWAY>AI</div>
    </div>
  </section>
)

export default Banner
