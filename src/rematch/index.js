import { init } from '@rematch/core'
import immerPlugin from '@rematch/immer'
import * as models from './model'

export default init({
  plugins: [immerPlugin()],
  models
})
