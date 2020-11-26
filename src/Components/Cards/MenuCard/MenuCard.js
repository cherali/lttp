import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useQuery } from '../../../hooks/useQuery';

import './menu-card.scss'

function MenuCard({ item }) {

  const id = useQuery('id')

  return (
    <Nav.Link as='li' active={id == item.id} >
      <Link to={`/products?id=${item.id}`}>
        {item.name}
      </Link>
    </Nav.Link>
  );
}

export default MenuCard;
