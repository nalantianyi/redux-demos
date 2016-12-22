/**
 * Created by nalantianyi on 2016/12/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import Counter from './components/Counter';
import counter from './reducers';

import createLogger from 'redux-logger';

const logger=createLogger();
const store = createStore(counter,applyMiddleware(logger));
const rootEl = document.getElementById('root');
const render = () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    >

    </Counter>, rootEl);
render();
store.subscribe(render);