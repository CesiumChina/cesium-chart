/**
  @Author: Caven Chen
**/

import { extendComponentView } from 'echarts'
extendComponentView({
  type: 'GLMap',
  init: function (ecModel, api) {
    this.api = api
    let viewer = api.getZr().viewer
    viewer.scene.postRender.addEventListener(this.moveHandler, this)
  },
  moveHandler: function (t, e) {
    this.api.dispatchAction({
      type: 'GLMapRoam',
    })
  },
  render: function (t, e, i) {},
  dispose: function (t) {
    let viewer = this.api.getZr().viewer
    viewer.scene.postRender.removeEventListener(this.moveHandler, this)
  },
})
