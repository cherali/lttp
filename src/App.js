import { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Home = lazy(() => import('./Containers/Home'))
const Products = lazy(() => import('./Containers/Products'))
const Category = lazy(() => import('./Containers/Category'))


function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Suspense fallback={null}>
          <Route exact path='/' component={Home} />
          <Route path='/category' component={Category} />
          <Route path='/products' component={Products} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
