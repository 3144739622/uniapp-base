module.exports = {
  // 默认情况下，ESLint会在所有父级组件中寻找配置文件，一直到根目录。ESLint一旦发现配置文件中有   "root": true，它就会停止在父级目录中寻找。
  root: true,
  parserOptions: {
    // 对Babel解析器的包装使其与 ESLint 兼容。
    parser: 'babel-eslint',
    // 代码是 ECMAScript 模块
    sourceType: 'module'
  },
  env: {
    // 预定义的全局变量，这里是浏览器环境
    browser: true,
    node: true,
    es6: true,
  },
  // 扩展风格
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  // 规则的细节请到ESLint官方网站查看http://eslint.org/docs/rules/
  rules: {
    "vue/no-parsing-error": [1, {
      'x-invalid-end-tag': false,
    }],
    "vue/max-attributes-per-line": [1, {
      "singleline": 5,
      "multiline": {
        "max": 6,
        "allowFirstLine": true
      }
    }],
    "vue/name-property-casing": ["error", "PascalCase"],
    // 禁止或强制在单行代码块中使用空格
    'block-spacing': [1, 'always'],
    // 不允许不必要的转义字符
    'no-useless-escape': [0, 'always'],
    // 强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab
    'brace-style': [1, '1tbs', {
      'allowSingleLine': true
    }],
    //  数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号
    'comma-dangle': [1, 'never'],
    // 控制逗号前后的空格
    'comma-spacing': [1, {
      'before': false,
      'after': true
    }],
    'comma-style': [1, 'last'],

    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [1, {
      'beforeColon': false,
      'afterColon': true
    }],
    // 强制在关键字前后使用一致的空格
    'keyword-spacing': [1, {
      'before': true,
      'after': true
    }],
    // 要求构造函数首字母大写
    'new-cap': [1, {
      'newIsCap': true,
      'capIsNew': false
    }],
    // 禁止不必要的括号 //(a * b) + c;//报错
    'no-extra-parens': [0, 'functions'],
    // 禁止在字符串和注释之外不规则的空白
    'no-irregular-whitespace': 1,
    // 禁用 __iterator__ 属性
    'no-iterator': 1,
    // 不允许标签与变量同名
    'no-label-var': 1,
    // 禁用不必要的嵌套块
    'no-lone-blocks': 1,
    //不允许空格和 tab 混合缩进
    'no-mixed-spaces-and-tabs': 1,
    // 禁止使用多个空格
    'no-multi-spaces': 1,
    // 禁止使用多行字符串，在 JavaScript 中，可以在新行之前使用斜线创建多行字符串
    'no-multi-str': 1,
    // 不允许多个空行
    'no-multiple-empty-lines': [1, {
      'max': 1
    }],
    // 禁用行尾空格
    'no-trailing-spaces': 1,
    // 强制操作符使用一致的换行符
    'operator-linebreak': [1, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': [0, 'never'],
    'arrow-spacing': [
      1,
      {
        before: true,
        after: true
      }
    ], //=>的前/后括号
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    'semi': [0, 'never'],
    // 强制分号之前和之后使用一致的空格
    'semi-spacing': [1, {
      'before': false,
      'after': true
    }],
    // 强制在块之前使用一致的空格
    'space-before-blocks': [1, 'always'],
    // 要求操作符周围有空格
    'space-infix-ops': 1,
    // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    'array-bracket-spacing': [1, 'never'],
    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'template-curly-spacing': [1, 'never'],
    // 强制在圆括号内使用一致的空格
    'space-in-parens': [1, 'never'],

    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': [1, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    // 强制在花括号中使用一致的空格
    'object-curly-spacing': [1, 'always', {
      objectsInObjects: false
    }],
    // 标签</>前后不换行
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    // self-closing问题
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "any",
        "normal": "always",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    // 问题
    'no-console': 'off',
    'no-debugger': 'off',
    'generator-star-spacing': 'off',
    "vue/v-on-style": ["error", "shorthand"],
    "vue/require-prop-types": 'off',
    // 设置标签 元素/组件特性的顺序
    "vue/attributes-order": ["error", {
      "order": [
        "EVENTS",
        "LIST_RENDERING",
        "BINDING",
        "DEFINITION",
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "GLOBAL",
        "UNIQUE",
        "TWO_WAY_BINDING",
        "OTHER_DIRECTIVES",
        "OTHER_ATTR",
        "CONTENT"
      ]
    }],
    // vue 组件/实例的选项的顺序
    "vue/order-in-components": ["error", {
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "data",
        "computed",
        "watch",
        "LIFECYCLE_HOOKS",
        "methods",
        ["template", "render"],
        "renderError"
      ]
    }]
  }
}
