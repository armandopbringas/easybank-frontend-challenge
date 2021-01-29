import React from 'react'
import ProductCharacteristics from '../components/Product-characteristics/Product-characteristics'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      {/* Hero */}
      <div className='hero hero_bg-img'>
        <div className='container'>
          <div className='hero_img'/>
        </div>
      </div>
      {/* Main */}
      <div className='main container'>  
        <h1 className='main_title'>
          Next generation deigital banking
        </h1>
        <p className='main_text'>
          Take your financial life onlime. Your Easybank
          account will be a one-stop-shop for spending, 
          saving, budgeting, investing and much more.
        </p>
        <button>
          Request Invite
        </button>
      </div>
      {/* Why use product */}
      <div className='why-use container'>
        <h1 className='why-use_title'>
          Why choose Eaybank
        </h1>
        <p className='why-use_text'>
          We leverage Open Banking to turn your banking
          account into your financial hub, Control your
          finances like never before.
        </p>
        {/* Product characteristics description */}
        <ProductCharacteristics />
      </div>
    </div>
  )
}
 
export default Home