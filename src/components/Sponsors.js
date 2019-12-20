import React from "react"

import logo from '../img/bhm-logo.svg'
const partners = [0,0,0,0,0,0,0,0, 0, 0];
const Sponsors = () => (
  <section className="sponsors">
    <div className="sponsors-wrapper">
    <div className="columns is-half-desktop is-full-tablet is-full-mobile ">
      <div className="column bePartner">
        <h1>Our Partners</h1>
        <h2>LOREM IPSUM GENERATOR</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <a href="mailto:blackhistorymonth.belgium@gmail.com?subject=Become BHM Partner&body=Hello BHM! We'd like to be your partner...">
            Be our partner
          </a>
      </div>
      <ul className="column partners">
        {partners.map((partner, key)=>
          <li key={key}>
            <a href="https://www.facebook.com/blackhistorymonthbelgium/">
              <img
              src={logo}
              alt="BHM"
              style={{height: '3em' }}
              />
            </a>
          </li>
        )}
      </ul>
    </div>
    </div>
  </section>
)
export default Sponsors