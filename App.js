// import React from 'react'
// import { AppRegistry, AsyncStorage } from 'react-native'
// import dva from 'dva/mobile'
// import { persistStore, autoRehydrate } from 'redux-persist'

// import { registerModels } from './src/models'
// import Router from './src/router'

// const app = dva({
//   initialState: {},
//   extraEnhancers: [autoRehydrate()],
//   onError(e) {
//     console.log('onError', e)
//   },
// })
// registerModels(app)
// app.router(() => <Router />)
// const App = app.start()

// // eslint-disable-next-line no-underscore-dangle
// persistStore(app._store, { storage: AsyncStorage })

// export default App;

import React from 'react'
import { AppRegistry, AsyncStorage } from 'react-native'
import dva from 'dva/mobile'
import { persistStore, autoRehydrate } from 'redux-persist'
import { StackNavigator } from 'react-navigation';
import { Root } from "native-base";

import { registerModels } from './src/models'

import Main from './src/containers/Main';
import ActionSheetPage from './src/containers/ActionSheet';

const app = dva({
  initialState: {},
  extraEnhancers: [autoRehydrate()],
  onError(e) {
    console.log('onError', e)
  },
})
registerModels(app);
const Router = StackNavigator({
  Main: { screen: Main },
  ActionSheetPage: { screen: ActionSheetPage }, 
});
app.router(() => <Root><Router /></Root>)
const App = app.start()

// eslint-disable-next-line no-underscore-dangle
persistStore(app._store, { storage: AsyncStorage })

export default App;