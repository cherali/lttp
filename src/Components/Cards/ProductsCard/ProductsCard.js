import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { separator } from '../../../common/utils/helpers'
import { getDim } from '../../../common/utils/screenDimention'
import IconWrapper from '../../Wrappers/IconWrapper'

import './products-card.scss'


const IMAGE_KEY = {
  xs: 'small_pic',
  sm: 'small_pic',
  md: 'medium_pic',
  lg: 'large_pic',
  xl: 'large_pic',
}


function ProductsCard({ item }) {
  return (
    <Col lg='3' md='6' sm='1' className='products-card mb-3'>
      <Card className='w-100'>
        <div className='-image'>
          <Card.Img variant="top" src={`http://back.liateam.com${item[IMAGE_KEY[getDim()]]}`} />
        </div>

        <Card.Body className='position-relative'>
          {
            item.isNew && (
              <div className='new-wrapper'>
                <p>جدید</p>
              </div>
            )
          }

          <Card.Title className='mx-2'>{item.title}</Card.Title>
          <Card.Text className='volume'>{item.volume}</Card.Text>

          <Card.Footer>
            <Row noGutters>
              <Col sm='3'>
                <IconWrapper name='cartPlus' />
              </Col>
              <Col sm='9' className='-price d-flex justify-content-center align-items-center'>{separator(item.price.final_price)} تومان</Col>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductsCard;
