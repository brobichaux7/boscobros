import React from 'react'
import brandStyle from '../style/brands.module.css'
import GP from '../images/georgia-pacific.png'
import igloo from '../images/igloo.png'
import NS from '../images/north-safety.png'
import MSA from "../images/msa.png"

const Brands = () => {
  return (
    <div>
      <div className={brandStyle.desc}>
          <h1><b>BRANDS & ITEMS WE STOCK</b></h1>
          <h5>
  3M, Fibre-Metal, MSA, North, Sqwincher, International Paint, Memphis Glove, Tyco Tapes, Rope & Twine,   Firecloth, Lincoln Electrodes, Loctite, Lacrosse Boots, Primesource Boots, Lakeland Clothing, Rags, Poly Sheeting, Uvex, Drillco, Klein, Stanco, Norseman, Bolle', Pyramex Eyewear, Poly Tubing, Encon, Crossfire, Crews, Janitorial, Magnaflux, Stanley Tools, Martin Hand Tools, Harnesses, Lanyards, Permatex, Milwaukee Tools, Dewalt Tools, Bosch Tools, Harrington Hoist, Carborundum, Walter Abrasives, Lenox Saw Co., Office Supplies, Lumber, Oil Absorbent Pads/Boom, Nylon Slings, Paint Sundries & anything else you need!
          </h5>
      </div>
      <div className={brandStyle.brands}>
        <ul>
          <li>
            <img src={GP} alt="Georgia Pacific" width="200px"/>
          </li>
          <li>
            <img src={igloo} alt="Igloo" width="200px" />
          </li>
          <li>
            <img src={NS} alt="North Safety" width="200px" />
          </li>
          <li>
            <img src={MSA} alt="MSA Safety Company" width="200px" />
          </li>
          <li>
            <img src={GP} alt="Georgia Pacific" width="200px" />
          </li>
          <li>
            <img src={GP} alt="Georgia Pacific" width="200px" />
          </li>
          <li>
            <img src={GP} alt="Georgia Pacific" width="200px" />
          </li>
          <li>
            <img src={GP} alt="Georgia Pacific" width="200px" />
          </li>
          <li>
            <img src={GP} alt="Georgia Pacific" width="200px" />
          </li>
          <li>
            <img src={GP} alt="Georgia Pacific" width="200px" />
          </li>
          <li>
            <img src={GP} alt="Georgia Pacific" width="200px" />
          </li>
          <li>
            <img src={GP} alt="Georgia Pacific" width="200px" />
          </li>
          <li>
            <img src={GP} alt="Georgia Pacific" width="200px" />
          </li>
          <li>
            <img src={GP} alt="Georgia Pacific" width="200px" />
          </li>
          <li>
            <img src={GP} alt="Georgia Pacific" width="200px" />
          </li>
          <li>
            <img src={GP} alt="Georgia Pacific" width="200px" />
          </li>
          <li>
            <img src={GP} alt="Georgia Pacific" width="200px" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Brands