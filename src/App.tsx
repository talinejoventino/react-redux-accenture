import React from 'react';
import { Provider } from 'react-redux';
import ListProducts from './components/listProducts';
import Product from './components/product';
import store from './store'

function App() {
  return (
    <div className="App">
      <h1>React redux</h1>
      <Provider store={store}>
        <ListProducts/>
        <Product/>
      </Provider>
    </div>
  );
}

export default App;
