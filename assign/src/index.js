import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './redux';
import Form from './form';
import * as serviceWorker from './serviceWorker';

function Start() {
    return (
      <Provider store={store}>
          <div className='outer'>
            <div className="form">
              <h1>Form</h1>
              <Form/>
            </div>
  
          </div>
      </Provider>
    
      );
  }
ReactDOM.render(<Start />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
