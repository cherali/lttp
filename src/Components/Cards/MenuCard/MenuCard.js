import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './menu-card.scss'

function MenuCard({ item }) {
  return (
    <Nav.Link as='li' >
      <Link to={'/'}>
        {item.name}
      </Link>
    </Nav.Link>
  );
}

export default MenuCard;
