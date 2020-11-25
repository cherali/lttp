import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Containers/Home';
import Category from './Containers/Category';
import Products from './Containers/Products';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/category' component={Category} />
        <Route path='/products' component={Products} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
