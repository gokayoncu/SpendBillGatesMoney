import React, { useState } from 'react'
import './css/section.css'
import './../App.css'

function Card({product, money, setMoney}) {
    
  let [count , setCount] = useState(0);

  const {id,title,price,image} = product;
  
    
  
  const increaseClick =  ()=>{
      if(money>price){
         setCount(count + 1)
         setMoney(money - price)
        if(count+1>0){
          product.receipt=count+1;
          product.total=(count+1)*price;
          product.isVisible = true;
        }
      }
    }
    
  const decreaseClick = ()=>{
    if(count > 0 ){
     setCount(count - 1)
     setMoney(money + price)
     product.receipt=count-1;
     product.total =(count-1)*price;
    }
    if(count <= 1){
      product.isVisible=false;
    }
         
  }


  return (
    <div className='sections'>
        <img className='img' src={image} alt="" />
        <h4>{title}</h4>
        <p>$ {price}</p>
        <div className='shopping'>
          <button disabled={count === 0} id='sell' onClick={decreaseClick}>SELL</button>
          <nav className='count-nav'>{count}</nav> 
          <button id='buy' onClick={increaseClick} >BUY</button>          
        </div>
        
    </div>
  )
}

export default Card
