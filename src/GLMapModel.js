/**
  @Author: Caven Chen
**/

import { extendComponentModel } from 'echarts'

extendComponentModel({
  type: 'GLMap',
  getViewer() {
    return Object(this.getZr()).viewer
  },
  defaultOption: {
    roam: false,
  },
})
