# lys-ui 下载
> npm i lys-ui  下载框架
## 引入
```
import LysUI fomr 'lys-ui'  // 引入 lys-ui

import 'lys-ui/dist/lys-ui.css' // 引入样式

Vue.use(LysUI) // 全局使用
```
## Button

| 参数     | 说明         | 类型    | 可选值                                    | 默认值  |
| -------- | ------------ | ------- | ----------------------------------------- | ------- |
| size     | 按钮的大小   | String  | medium /small/mini                        | default |
| type     | 类型         | String  | primary/danger/success/info/warning       |         |
| plain    | 是否朴素按钮 | Boolean |                                           | false   |
| round    | 是否圆角按钮 | Boolean |                                           | false   |
| circle   | 是否圆形按钮 | Boolean |                                           | fasle   |
| disabled | 是否禁用按钮 | Boolean |                                           | fasle   |
| icon     | 图标字体         | String  | lys-icon-search/edit/message/check/delete |         |

## Dialog

| 参数    | 说明               | 类型    | 可选参数 | 默认值 |
| ------- | ------------------ | ------- | -------- | ------ |
| visible | true为显示反之隐藏 | Boolean |          | fasle  |
| title   | 标题               | String  |          |        |
| width   | 宽度               | String  |          | 50%    |
| top     | 顶部距离           | String  |          |        |
## Input
| 参数          | 说明             | 类型    | 可选参数         | 默认值 |
| ------------- | ---------------- | ------- | ---------------- | ------ |
| clearable     | 清空值           | Boolean |                  | fasle  |
| type          | input类型        | String  | text/password... | text   |
| show-password | 密码框的显示切换 | Boolean |                  | fasle  |
| disabled      | 禁用             | Boolean |                  | false  |

## Switch
| 参数          | 说明                 | 类型   | 可选参数 | 默认值 |
| ------------- | -------------------- | ------ | -------- | ------ |
| activeColor   | 活跃状态的颜色/true  | String |          |        |
| inactiveColor | 原始状态的颜色/fasle | String |          |        |


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
