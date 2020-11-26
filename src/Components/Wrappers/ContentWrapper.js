import { Row } from 'react-bootstrap';
import Cart from '../Cart/Cart'
import Menu from '../Menu/Menu'

function ContentWrapper({ children }) {
  return (
    <div>
      <Row noGutters className='justify-content-between ml-3'>
        <Menu />
        <Cart />
      </Row>
      { children}
    </div>
  );
}

export default ContentWrapper;
