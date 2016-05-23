import React, { Component } from 'react';
import Page from './page.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Posts from './reducers/post.js';

let store = createStore(Posts);

export default class App extends Component {
    render()  {
        console.dir(store.getState());
        return (
            <Provider store={store}>
                <Page />
            </Provider>
        );
    }
}