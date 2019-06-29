import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../modules/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../modules/sagas";

// redux-saga 호출
const sagaMiddleware = createSagaMiddleware();
// redux-saga와 store연결
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// redux-saga에 rootSaga연결
sagaMiddleware.run(rootSaga);

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
