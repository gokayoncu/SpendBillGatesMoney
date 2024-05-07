import "./css/navbar.css"
import React, { useState } from 'react'


function navbar({money, setMoney}) { 

  return (
    <div className="gates-money">
        <p className="money">$ {money}</p>
    </div>
  )
}

export default navbar
