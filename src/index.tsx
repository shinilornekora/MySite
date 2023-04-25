import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";


const defaultState = {
    posts: []
}
function reducer(state = defaultState, action: any) {
    switch (action.type) {
        case "ADD__POSTS":
            return {...state, posts: [...state.posts, action.payload]}
        case "REMOVE__POSTS":
            return {...state, posts: state.posts.filter((e) => e !== action.payload)}
        default:
            return state
    }

}
// @ts-ignore
const store = createStore(reducer)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
