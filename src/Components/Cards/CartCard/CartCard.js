import { Row, Col } from 'react-bootstrap'
import { separator } from '../../../common/utils/helpers'
import { addCount, reduceCount, removeProductFormCart } from '../../../redux/actionCreators/productActionCreators'

import './cart-card.scss'

function CartCard({ item, index }) {
  return (
    <Row noGutters className={`cart-card py-3 ${index % 2 === 0 ? '--bg-dark' : '--bg-light'}`}>
      <Col xs='4'>
        <img alt='' className='-cart-img' src={`https://back.liateam.com${item.prod.small_pic}`} />
      </Col>

      <Col xs='6'>
        <p>{item.prod.title}</p>
        <p className='text-gray mt-2'>{separator(item.prod.price.final_price)} تومان</p>

        <Row noGutters className='--picker mt-3 user-select-none justify-content-start align-items-center'>
          <div className='rounded-lg px-1'>
            <span onClick={() => addCount(index)}>
              +
          </span>

            <span className='count'>
              {item.count}
            </span>

            <span className='text-gray' onClick={() => {
              if (item.count > 1) reduceCount(index)
            }}>
              -
          </span>
          </div>
        </Row>
      </Col>

      <Col xs='1' className='m-auto'>
        <span className='-remove' onClick={() => removeProductFormCart(item.prod.id)}>×</span>
      </Col>
    </Row>
  )
}

export default CartCard
