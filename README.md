# Cesium-Chart 

<p>
<img src="https://img.shields.io/github/actions/workflow/status/dvgis/cesium-chart/build.yml"/>
<img src="https://img.shields.io/badge/license-Apache%202-blue"/>
<a href="https://www.npmjs.com/package/@dvgis/cesium-chart" target="_blank">
 <img src="https://img.shields.io/npm/v/@dvgis/cesium-chart?color=orange&logo=npm" />
</a>
<a href="https://www.npmjs.com/package/@dvgis/cesium-chart" target="_blank">
 <img src="https://img.shields.io/npm/dt/@dvgis/cesium-chart?logo=npm"/>
</a>
</p>

`Cesium-Chart` is an intermediate library for linking Cesium and Echarts, using which data visual programming can be applied to Cesium 3D Earth

## Installation


`NPM / YARN` **_`(Recommend)`_**

Installing with NPM or YARN is recommended and it works seamlessly with webpack.

```shell
yarn add @dvgis/cesium-chart
-------------------------
npm install @dvgis/cesium-chart
```

```js
 import { ChartLayer } from '@dvgis/cesium-chart'
```

`CDN`

```html
<script src="https://cdn.jsdelivr.net/npm/@dvgis/cesium-chart/dist/cesium.chart.min.js"></script>
```

## Usage

```js
 let  layer =  new ChartLayer('layer',viewer)
 layer.setOption({}) //设置Echarts配置，其中tooltip设置无效
```

## Creation

 - constructor(id,viewer)
   - parameters
     - `{String} id`
     - `{Object} viewer`
   - returns `ChartLayer`

## Property
 
- `{String} id` `readonly`
- `{Boolean} show` 

## Methods

- **_setOption(option)_**
    - parameters
        - `{Object} option`
    - returns `ChartLayer`

- **_clear()_**
  - returns `ChartLayer`

- **_resize()_**
    - returns `ChartLayer`
