import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = (props) => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade"> Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p> An e-commerce website is an online platform that facilitates
                buying and selling products or services over internet.</p>
            <p>

            </p>
        </div>
    </div>
  )
}

export default DescriptionBox