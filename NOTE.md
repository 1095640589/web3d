# web

This template should help get you started developing with Vue 3 in Vite.



## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```



## 修改端口

添加局域网访问 修改端口为8080

```js
export default defineConfig({
    ...
    server:{
        host:'0.0.0.0',
        port:8080
    }
})
```



## 安装 sass

```sh
npm add -D sass
```

直接安装依赖使用即可

```vue
<style lang="scss" scoped>
...
</style>
```



## 动态title

**简单配置**

安装 插件 vite-plugin-html

```sh
npm i -D vite-plugin-html
```

在 vite.config.js 中增加配置

```js
...
import {createHtmlPlugin} from 'vite-plugin-html'
...

export defult defineConfig({
    plugins:[
        vue(),
        createHtmlPlugin({
            inject:{
                data:{
                    title:'标题'//在浏览器上显示的标题
                }
            }
        })
    ],
    server:{
        ...
    },
    ...
})
```

修改index.html

```html
<!--<title>Vite App</title>-->
<title><%- title %></title>
```

重启项目 即可生效

**复杂配置**
未完待续...



## 配置prettier

安装插件

```sh
npm add -D prettier
```

在根目录创建.prettierrc配置文件

```js
semi: false
singleQuote: true
printWidth: 80
trailingComma: 'none'
arrowParens: 'avoid'
```



## 配置axios

安装插件

```sh
npm install axios
```

在 /src 目录创建 utils目录，在此目录创建 request.js 文件 封装 axios

```js
import axios from 'axios'

// 默认请求地址
axios.defaults.baseURL = ''

// 设置请求超时
axios.defaults.timeout = 10000

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // const token = store.state.token
    // token && (config.headers.Authorization = 'Bearer ' + token)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
axios.interceptors.response.use(
  response => {
    return response.data
  },
  async error => {
    if (error.response) {
      switch (error.response.status) {
        default:
        // ElMessage.error(error.response.data.message)
      }
      return Promise.reject(error.response.data)
    } else {
      // ElMessage.error(error.message || error)
      return Promise.reject(error)
    }
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} data [请求时携带的参数]
 * @param {Object} config
 */
export function post(url, data, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
```



## 配置 element-plus

参考[element-plus官网](https://element-plus.org/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5)

安装插件

```sh
npm install element-plus --save
```

**按需引入**

安装插件

```sh
npm install -D unplugin-vue-components unplugin-auto-import
```

将下列代码插入 vite 的配置文件 vite.config.js 中

```js
// vite.config.js
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

然后在main.js里引入element的样式，否则element-plus的样式会失效

```js
//main.js
...
import 'element-plus/dist/index.css'
...
```



## 环境变量

在根目录下创建两个文件 .env.dev  .env.prod

```
#开发环境
NODE_ENV=development

VITE_APP_BASE_API='/api'
```



```
#生产环境
NODE_ENV=production

VITE_APP_BASE_API='/api'
```

在 package.json 里需要修改指令， 添加 --mode

```json
{
    ...
    "script":{
        "dev":"vite --mode dev",
        "build": "vite build --mode prod",
        "preview": "vite preview"
    },
    ...
}
```



调用时结构为

```
import.meta.env.VITE_APP_BASE_API
```

