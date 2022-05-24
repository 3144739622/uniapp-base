# my-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### UI框架
```
使用 UNI UI
官网地址 https://uniapp.dcloud.io/component/uniui/uni-ui

```

### style
```
UI框架使用sass对样式进行预处理,本项目使用Vant 2.x 沿用sass预处理语言
为了将来更好的配合uni编译多端，css样式采用uni提供的upx单位
```

### 图片图标
```
图片图标文件尽量使用七牛云存储
地址 https://portal.qiniu.com/kodo/bucket/resource/upload?bucketName=pisen-power
```

### 请求拦截提示
```
data中私有字段
requestToast => 是否在code != 正确码 时隐藏 toast提示
requestLoading => 是否隐藏请求中loading
```