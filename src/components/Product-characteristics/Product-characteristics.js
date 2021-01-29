import React from 'react'
import './Product-characteristics.scss'
import logoCharacteristics from '../../assets/icon-online.svg'

const ProductCharacteristics = () => {
  return (
    <div className='product-characteristics container'>
      <img 
        src={ logoCharacteristics } 
        alt='Characteristics logo'
        className='product-characteristics_img'
      />
      <h2 className='product-characteristics_title'>
        Online Banking
      </h2>
      <p className='product-characteristics_text'>
        Our modern and mobile applications allow you 
        to keep track of your finances wherever you 
        are in the world.
      </p>
    </div>
  )
}

export default ProductCharacteristics