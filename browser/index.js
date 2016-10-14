'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import AllPuppiesContainer from './AllPuppiesContainer';
import SinglePuppyContainer from './SinglePuppyContainer';

import { Provider } from 'react-redux';
import store from './store'

import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import {asyncFetchPuppies, asyncFetchSinglePuppy} from './action-creators'

const onPuppiesEnter = () => {
	store.dispatch(asyncFetchPuppies())
}

const onSinglePuppyEnter = (nextState) => {
	store.dispatch(asyncFetchSinglePuppy(nextState.params.puppyId));
}

ReactDOM.render(
  <div className="container flexbox-container">
    <div className="jumbotron">
    <Provider store={store}>
      <Router history={hashHistory}>
      	<Route path="/">
	      	<IndexRoute component={AllPuppiesContainer} />
	      	<Route path="puppies" >
	      		<IndexRoute 
	      			component={AllPuppiesContainer} 
	      			onEnter={onPuppiesEnter} />
	      		<Route 
	      			path=":puppyId" 
	      			component={SinglePuppyContainer} 
	      			onEnter={onSinglePuppyEnter}/>
	      	</Route>
	    </Route>
      </Router>
    </Provider>
    </div>
    <div>
    </div>
  </div>,
  document.getElementById('app')
);