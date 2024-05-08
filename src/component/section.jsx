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
  let billMoney=99999999999999;
  const [money, setMoney] =  useState(billMoney)
  
  
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
            money != billMoney ? <h3 className='receipt-header'>RECEİPT</h3> : null 
          }
          {
          products?.map((product)=>(
            <Article  key={product.id} product={product} money={money} setMoney={setMoney} />
            ))
          }
          <hr/>
          {
            money != billMoney ? <h4 className='total-receipt'>TOTAL= {billMoney-money }</h4> : null 
          }
          </div>        
      </div>
      </>              
  )
}

export default Section
