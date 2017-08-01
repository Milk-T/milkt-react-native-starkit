import React from 'react'
import { AppRegistry, AsyncStorage } from 'react-native'
import dva from 'dva/mobile'
import { persistStore, autoRehydrate } from 'redux-persist'

import { registerModels } from './src/models'
import Router from './src/router'

const app = dva({
  initialState: {},
  extraEnhancers: [autoRehydrate()],
  onError(e) {
    console.log('onError', e)
  },
})
registerModels(app)
app.router(() => <Router />)
const App = app.start()

// eslint-disable-next-line no-underscore-dangle
persistStore(app._store, { storage: AsyncStorage })

export default App;