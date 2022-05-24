###
```
{
  "files.associations": {
    "*.vue": "vue"
  },
  "eslint.options": {
    "extensions": [
      ".js",
      ".vue"
    ]
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/dist": true
  },
  "emmet.syntaxProfiles": {
    "javascript": "jsx",
    "vue": "html",
    "vue-html": "html"
  },
  "git.confirmSync": false,
  "window.zoomLevel": 0,
  "editor.renderWhitespace": "boundary",
  "editor.cursorBlinking": "smooth",
  "editor.minimap.enabled": true,
  "editor.minimap.renderCharacters": false,
  "editor.fontFamily": "'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback'",
  "window.title": "${dirty}${activeEditorMedium}${separator}${rootName}",
  "editor.codeLens": true,
  "editor.snippetSuggestions": "top",
  // 重新设定tabsize
  "editor.tabSize": 2,
  "files.autoSave": "off",
  "eslint.run": "onSave",
  // 此配置已作废，使用editor.codeActionsOnSave，里面配置source.fixAll.eslint 属性把"eslint.autoFixOnSave": true 改成：
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // 每次保存的时候将代码按eslint格式进行修复
    // "source.fixAll": true, // 启用全部的格式化工具
    // "source.fixAll.eslint": false // 关闭eslint格式化工具
  },
  "eslint.format.enable": true,
  // 添加 vue 支持
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue"
  ],
  // 每次保存的时候自动格式化（建议关掉，用eslint来修复）
  "editor.formatOnSave": true,
  "[vue]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  }
}
```