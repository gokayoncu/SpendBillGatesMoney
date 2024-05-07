import React from 'react'
import './css/Article.css'


function Article({product, money, setMoney}) {
  const {id,title,price,image,receipt,isVisible,total} = product;
  


  return (
    <div >
      
      {
        isVisible != false ? <div className='div-receipt' >{title} x{receipt} ={total}</div> : null
      }
    </div>
  )
}

export default Article
