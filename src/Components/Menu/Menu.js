import { Nav, Navbar, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import MenuCard from '../Cards/MenuCard/MenuCard'
import { getCategoryList } from '../../redux/actionCreators/categoriesActionCreators';

import './menu.scss'


getCategoryList()


function Menu() {
  const categories = useSelector(s => s.category?.categoriesList)

  return (
    <Row noGutters>
      <Navbar bg='light' variant="light" className='w-100'>
        <Nav>
          {categories?.map(cats => (
            <MenuCard item={cats} key={cats.id} />
          ))}
        </Nav>
      </Navbar>
    </Row>
  );
}

export default Menu;
