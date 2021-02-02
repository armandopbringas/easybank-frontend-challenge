import React from 'react'
import './Articles.scss'
import currencyImage from '../../assets/image-currency.jpg'

const Articles = () => {
  return (
    <div className='article-item'>
      <img src={ currencyImage } alt='post'/>
      <div className='article-item_text-container'>
        <small className='article-item_by'>By Claire Robinson</small>
        <h3 className='article-item_title'>
          Recive money in any currency with no fees
        </h3>
        <p className='article-item_text'>
          The world is getting smaller and we´re
          becoming more mobile. So why should you be 
          forced only recive money in a single...
        </p>
      </div>
    </div>
  )
}
 
export default Articles