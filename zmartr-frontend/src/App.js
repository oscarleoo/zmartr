import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
// import { StripeProvider } from 'react-stripe-elements';
import { ThemeProvider } from '@material-ui/core/styles';
import storage from 'redux-persist/lib/storage';
import promise from 'redux-promise-middleware';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import rootReducer from './redux/rootReducer';
import Zmartr from './modules/Zmartr';

const App = () => {
  const persistConfig = { key: 'root', storage };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);
  const store = createStoreWithMiddleware(persistedReducer);
  const persistor = persistStore(store);

  return (
    // <StripeProvider apiKey="pk_test_nznndKLo23ZGUUVPwKKUZk0C" >
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Zmartr />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
    // </StripeProvider>
  );
};

export default App;
