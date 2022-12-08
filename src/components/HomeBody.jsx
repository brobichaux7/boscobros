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
      <div className={homeStyle.about}>
        <h1><b>About Us</b></h1>
        <h2>How it Began</h2>
        <h5>
          Our company started out in the early 1900's as A. Migliore Marine Supplies, a ship-chandlers business providing equipment and supplies for riverboat pilots, shipyards and shipping companies all up and down the Mississippi River.  In 1983, the company was purchased from the Migliore family by one of its chief employees, Joseph Bosco.
        </h5>
        <h5>
          Mr. Bosco raised his sons, Ricky and Jeno Bosco, in the business. They now operate the business and have increased the size of its warehouses six-fold.  Bosco Bros is now a premier industrial and marine supply company providing everything from power tools to cleaning supplies, from lumber to PPE.
        </h5>
        <h5>
          We’ve focused on building a team of friendly and helpful professionals who are ready to answer your questions and help you find what you need. With our impeccable quality standards and a wide assortment of products, you’ll be glad you decided to shop with us. At Bosco Bros, our customers always come first!
        </h5>
      </div>
    </div>
  )
}

export default HomeBody