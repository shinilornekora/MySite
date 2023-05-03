import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";


const defaultState = {
    books: [
        {serial: 1, name: "Путь надежды", link: "path-of-hope"},
        {serial: 2, name: "Величие алхимии", link: "path-of-hope"},
        {serial: 3, name: "Агония страха", link: "path-of-hope"},
        {serial: 4, name: "Глас мстителя", link: "path-of-hope"},
    ],
    posts: [],
    projects: [
        {
            name: "Tour agency",
            description: "This project represents a common structure of a touristic agency website. \n" +
                "Customer enters it, then types a city to relax in it. Tour-operator grabs this \n" +
                "request, and tries to book rooms in certain hotels of the chosen country. \n" +
                "Then manager of the hotel decides if this booking query acceptable or not. \n" +
                "DB sqlite3 was connected to Django via Django REST API. \n" +
                " \n " +
                "React listens to Django REST API via axios library. \n" +
                " \n " +
                "Frontend is adaptive to any window resolution.\n" +
                " \n " +
                "Routing was developed with React basic library with relevant name.\n" +
                " \n " +
                "Also there’s an admin role for adding/removing inns to/from list.\n" +
                "\n" +
                "Project management documents are created throughout the project and\n" +
                "stored with the whole code here."
        },
        {
            name: "Class separator",
            description: "This project was made during the “Project activity” discipline. It is an\n" +
                "experimental system of image recognition. In common, the program takes\n" +
                "enough attributes of the objects, shows the ones which will help distinguish\n" +
                "the objects. Calculations are measured by the tree of dichotomy.\n" +
                "\n" +
                "Graphical interface was developed using Windows Forms (.NET).\n" +
                "\n" +
                "There are three methods to determine the given class: method of the\n" +
                "discriminant lines, method of one/three neighbor/s.\n" +
                "System elects answer via major vote upon those three methods"
        }
    ]
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
