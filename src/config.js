const ENV = {
  'test': 'https://test.com/pp/api/',
  'dev': 'https://test.com/pp/api/',
  'pro': 'https://pro.com/pp/api/'
}

const MODE = process.env.VUE_APP_MODE;

module.exports = {
  request: ENV[MODE], // 不同环境的请求地址
  file: {
    url: 'https://pro.com/'
  },
  auth: {
    TokenKey: 'authorization-app', // 本地存储的token key值
    expires: 2 // token过期时间
  },
  websocket: {
    dev: 'wss://pro.com/websocket/',
    pro: 'wss://192.168.1.61:9148/websocket/',
    url: MODE === 'pro' ? 'wss://pro.com/websocket/' : 'wss://192.168.1.61:9148/websocket/'
  }
}