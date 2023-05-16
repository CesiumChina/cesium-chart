/**
  @Author: Caven Chen
**/

import { registerAction, registerCoordinateSystem } from 'echarts'
import './GLMapModel'
import './GLMapView'
import GLMapCoordSys from './GLMapCoordSys'
import ChartLayer from './ChartLayer.js'

registerCoordinateSystem('GLMap', GLMapCoordSys)
registerAction(
  {
    type: 'GLMapRoam',
    event: 'GLMapRoam',
    update: 'updateLayout',
  },
  function (payload, ecModel) {}
)

export { ChartLayer }
