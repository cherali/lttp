import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getDim } from '../common/utils/screenDimention';
import ProductsCard from '../Components/Cards/ProductsCard/ProductsCard';
import StepperWrapper from '../Components/Wrappers/StepperWrapper';
import { useQuery } from '../hooks/useQuery';
import { getProductsList, clearProductsList } from '../redux/actionCreators/productActionCreators';


const AMOUNT_PER_PAGE = {
  xs: 8,
  sm: 8,
  md: 8,
  lg: 8,
  xl: 8,
}

function Products() {
  const products = useSelector(s => s.product?.products?.list) || []

  const id = useQuery('id')


  useEffect(() => {
    // clear list
    clearProductsList()

    // get new list
    getProductsList(id)
  }, [id])

  return (
    <Container>
      <p className='text-right mt-4 mb-5 fs-2'>محصولات</p>

      <StepperWrapper
        amount={AMOUNT_PER_PAGE[getDim()]}
        wrapperClasses='d-flex w-100 flex-wrap'
        data={products}
        card={ProductsCard}
        resetCondition={id}
      />
    </Container>
  )
}

export default Products;
