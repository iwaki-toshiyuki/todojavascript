module.exports = {
  // 実行環境の指定
  // browser: true → window / document などのブラウザAPIを使える
  // es2021: true → ES2021（比較的新しいJavaScript構文）を許可
  env: {
    browser: true,
    es2021: true,
  },

  // 基本となるルールセット
  // eslint:recommended → ESLintが推奨する最低限の安全ルール
  extends: [
    "eslint:recommended",
  ],

  // JavaScriptの構文解析に関する設定
  parserOptions: {
    // ecmaVersion: "latest"
    // → 最新のECMAScript構文（import / export など）を使えるようにする
    ecmaVersion: "latest",

    // sourceType: "module"
    // → ES Modules（import / export）としてコードを解析する
    sourceType: "module",
  },

  // 個別ルールの上書き設定
  // ここに「warn / error / off」でルールを追加・変更できる
  rules: {
    // 例：
    // "no-console": "warn", // console.log を警告にする
    // "eqeqeq": "error",    // == を禁止し、=== を強制する
  },
};