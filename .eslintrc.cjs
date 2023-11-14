module.exports = {
    "parser": "vue-eslint-parser", // 解决 Parsing error: '>' expected 报错
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        './.eslintrc-auto-import.json'
    ]
}
