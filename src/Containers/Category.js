import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CategoryCard from '../Components/Cards/CategoryCard/CategoryCard';
import Spinner from '../Components/Spinner/Spinner';


function Category() {
  const categories = useSelector(s => s.category?.categoriesList)

  return (
    <Container>
      <p className='text-right fs-2 mb-5'>دسته بندی</p>

      <Row noGutters className='w-100'>
        {
          categories?.map(cats => (
            <CategoryCard item={cats} key={cats.id} />
          ))
        }

        {!categories && <Spinner className='m-auto' />}
      </Row>
    </Container>
  )
}

export default Category;
