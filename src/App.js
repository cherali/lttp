import { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContentWrapper from './Components/Wrappers/ContentWrapper';


const Home = lazy(() => import('./Containers/Home'))
const Products = lazy(() => import('./Containers/Products'))
const Category = lazy(() => import('./Containers/Category'))


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ContentWrapper>
          <Suspense fallback={null}>
            <Route exact path='/' component={Home} />
            <Route path='/category' component={Category} />
            <Route path='/products' component={Products} />
          </Suspense>
        </ContentWrapper>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
