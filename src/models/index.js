import appModel from './app'
import routerModel from './router'

export function registerModels(app) {
  app.model(appModel)
  app.model(routerModel)
}
