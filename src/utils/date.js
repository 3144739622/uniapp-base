/**
 * 获取时间相差的 *天*时*分
 * startTime 开始时间
 * endTime 结束时间
 */
export function diffTime(startTime, endTime) {
  if (startTime > endTime) {
    return '1分钟'
  }
  let argsLen = arguments.length;
  let val = 0;
  if (argsLen == 2) {
    val = (endTime - startTime) / 1000;
  } else {
    val = startTime / 1000;
  }

  let d = Math.floor(val / 86400);
  val = val % 86400
  let h = Math.floor(val / 3600);
  val = val % 3600
  let m = Math.floor(val / 60);
  val = val % 3600
  // let mm = Math.floor(val / 60);
  let str = ''
  if (d != 0) {
    str += d + '天'
  }
  if (h != 0) {
    str += h + '小时'
  }
  if (m != 0) {
    str += m + '分钟'
  }
  // if (mm != 0) {
  //   str += mm + '秒'
  // }
  if (d == 0 && h == 0 && Math.floor(m) == 0) {
    str += 1 + '分钟'
  }
  return str
}

/**
 * 获取周几
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

/**
 * 时间展示
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

// 获取时分秒 根据Date对象相减
export function getdTime(queryStartTime, queryEndTime, paragraph) {
  const startTime = new Date(queryStartTime).getTime();
  const endTime = new Date(queryEndTime).getTime();
  if (startTime > endTime) {
    return '1分钟'
  }
  let argsLen = arguments.length;
  let val = 0;
  if (argsLen == 2 || argsLen == 3) {
    val = (endTime - startTime)
  } else {
    val = startTime
  }
  if (startTime.toString().length === 13 || paragraph) {
    val = val / 1000
  }
  let d = Math.floor(val / 86400);
  val = val % 86400
  let h = Math.floor(val / 3600);
  val = val % 3600
  let m = Math.floor(val / 60);
  val = val % 60
  let second = Math.floor(val / 1);
  let str = ''
  if (d != 0) {
    str += d + '天'
  }
  if (h != 0) {
    str += h + '小时'
  }
  if (m != 0) {
    str += m + '分钟'
  }
  if (second != 0) {
    str += second + '秒'
  }
  if (d == 0 && h == 0 && Math.floor(m) == 0 && Math.floor(second) == 0) {
    str += 1 + '秒'
  }
  return str
}