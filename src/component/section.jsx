import React, { useState } from 'react'
import "./../App.css"
import Article from './Article';
import Card from './Card';
import Navbar from './navbar';
import './css/navbar.css'



function Section({products}) {
  // useEffect( () =>{
  //   console.log({price})
  // },[count])

  const [money, setMoney] =  useState(99999999999999)
  
  
    return (
      <>
       <Navbar money={money} setMoney={setMoney}/>       
       <div className='sections-div'>      
         {
          products?.map((product)=>(
            <Card key={product.id} product={product} money={money} setMoney={setMoney} />
          ))
        }        
         <div className='receipt'>
            
            {
              money != 99999999999999 ? <h3 className='receipt-header'>RECEİPT</h3> : null 
            }
            {
            products?.map((product)=>(
              <Article  key={product.id} product={product} money={money} setMoney={setMoney} />
              ))
            }
            <hr/>
            {
              money != 99999999999999 ? <h4 className='total-receipt'>TOTAL= {99999999999999-money }</h4> : null 
            }
          </div>        
      </div>
      </>              
  )
}

export default Section
