import React from 'react'
import IconWrapper from '../../Wrappers/IconWrapper'

import './category-card.scss'

function CategoryCard({ item }) {
  return (
    <div className='w-50 mb-5 --dir-ltr'>
      <div className='d-flex align-items-center category-card'>
        <div className='w-50 d-flex aligin-items-center ml-3'>
          <div className='d-flex align-items-center mr-2'>
            <IconWrapper name='chevronLeft' className='category-card-chev' />
          </div>
          <div>
            <p>{item.name}</p>
            {item.description && <p>{item.description}</p>}
          </div>
        </div>
        <img src={`https://back.liateam.com${item.image}`} alt='cat-img' className='category-card-img' />
      </div>
    </div>
  )
}

export default CategoryCard;
