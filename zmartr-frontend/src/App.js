import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import storage from 'redux-persist/lib/storage'
import promise from 'redux-promise-middleware'
import rootReducer from './redux/rootReducer'
import Application from './modules/Application'

const App = () => {

  const persistConfig = { key: 'root', storage }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const createStoreWithMiddleware = applyMiddleware(promise,)(createStore);
  const store = createStoreWithMiddleware(persistedReducer)
  const persistor = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Application />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )

}

export default App