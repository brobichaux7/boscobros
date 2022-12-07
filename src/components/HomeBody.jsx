import React from 'react'
import homeStyle from '../style/home.module.css'

const HomeBody = () => {
  return (
    <div>
      <div className={homeStyle.desc}>
        <h1><b>BOSCO BROS.</b></h1><br />
        <h2>Quality Products at Affordable Prices</h2><br />
        <h5><b style={{color: "white"}}>Welcome to Bosco Bros. For years, we’ve provided our customers with a wide range of safety and construction supplies, excellent customer service and unbeatable prices. Whatever you’re looking for, our friendly staff is ready to help.</b></h5>
      </div>
    </div>
  )
}

export default HomeBody