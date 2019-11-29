import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';
import store from './store';
import Filters from './components/FiltersContainer';
import List from './components/ListContainer';
import Form from './components/FormContainer';
import { fetchTodos } from './store/todos/actions';

console.log(store.getState());
store.dispatch(fetchTodos());
function App() {
    return (
        <Container maxWidth="md">
            <Provider store={store}>   
                <Filters />
                <List />
                <Form />
            </Provider>
        </Container>
    );
}

export default App;
