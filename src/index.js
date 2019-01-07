import React from "react";
import ReactDom from "react-dom";
import "babel-polyfill";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";
import rootReducer from "./root_reducer";
import saga from "./root_saga";
import PrivateRoute from "./App/common/privateRoute/privateroute.component";

import Landing from "./App/landing/landing";
import Test from "./App/test/test";
import Maps from "./App/maps/maps";

if (module.hot) {
  module.hot.accept();
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

const Index = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <PrivateRoute exact path="/test" component={Test} />
          <PrivateRoute exact path="/maps" component={Maps} />
        </Switch>
      </Router>
    </Provider>
  );
};

ReactDom.render(<Index />, document.getElementById("index"));
