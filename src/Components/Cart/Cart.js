import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Button, Col, Container, Row } from 'react-bootstrap';
import IconWrapper from '../Wrappers/IconWrapper';
import { separator, calcCartPrices } from '../../common/utils/helpers'
import CartCard from '../Cards/CartCard/CartCard'

import './cart.scss'



function Cart() {
  const [show, setShow] = useState(false)

  const cartItems = useSelector(s => s.product?.cart)

  return (
    <div className='porision-relative'>
      <Button
        variant='light'
        onClick={() => setShow(s => !s)}
        className='position-relative'
      >
        {cartItems?.length > 0 && <span className='--badge'>{cartItems.reduce(((ac, cu) => ac + cu.count), 0)}</span>}
        <IconWrapper name='cart' />
      </Button>


      {show && <Col sm='8' md='4' className='position-absolute -cart'>
        <span className='--arrow'></span>

        <Container fluid className='p-0 text-white text-right -cart-list-wrapper'>
          {
            cartItems?.map((cart, i) => (
              <CartCard item={cart} key={cart.prod.id} index={i} />
            ))
          }
        </Container>

        {cartItems?.length > 0 ? <>
          <Row noGutters className='py-3 text-white --bg-light --border'>
            <Col xs='5' className='text-end pl-2'>
              جمع کل:
          </Col>
            <Col xs='7' className='text-center'>
              {separator(calcCartPrices(cartItems))} تومان
          </Col>
          </Row>

          <Row noGutters className='px-3 py-4 --bg-dark'>
            <Button variant='primary' block >ثبت سفارش</Button>
          </Row>
        </>
          :
          <Row noGutters className='--empty-wrapper'>
            <p className='my-2 mx-3 text-white text-right'>سبد خرید خالی است.</p>
          </Row>
          }
      </Col>}
    </div>
  );
}

export default Cart;
