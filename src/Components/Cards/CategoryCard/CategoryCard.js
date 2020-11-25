import React from 'react'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import IconWrapper from '../../Wrappers/IconWrapper'

import './category-card.scss'

function CategoryCard({ item }) {

  const history = useHistory()

  const handleClick = () => history.push(`/products?id=${item.id}`)

  return (
    <div className='w-50 mb-5 --dir-ltr' onClick={handleClick}>
      <Card className='w-75 category-card' >
        <Card.Img variant='top' src={`https://back.liateam.com${item.image}`} className='category-card-img' />
        <Card.Body>
          <div className='mr-2'>
            <IconWrapper name='chevronLeft' className='category-card-chev' />
          </div>

          <div>
            <Card.Text>{item.name}</Card.Text>
            {item.description && <Card.Text>{item.description}</Card.Text>}
          </div>

        </Card.Body>
      </Card>
    </div>
  )
}

export default CategoryCard;
