import { lazy, Suspense } from 'react';
import { Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Cart from '../Cart/Cart'

const Menu = lazy(() => import('../Menu/Menu'))


const EXCLUDE_PATH = ['/']

function ContentWrapper({ children }) {
  const path = useLocation().pathname
  return (
    <div>
      { !EXCLUDE_PATH.includes(path) && <Row noGutters className='justify-content-between ml-3'>
        <Suspense fallback={null}>
          <Menu />
        </Suspense>
        <Cart />
      </Row>}
      { children}
    </div>
  );
}

export default ContentWrapper;
