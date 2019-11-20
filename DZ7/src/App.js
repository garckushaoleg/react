import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducer';

import Filters from './components/Filters'
import List from './components/ListContainer'
import Form from './components/FormContainer'

const store = createStore(rootReducer)

console.log(store.getState());

function App() {
  return (
    <Provider store={store}>
      <Filters />
      <List />
      <Form />
    </Provider>
  );
}

export default App;
