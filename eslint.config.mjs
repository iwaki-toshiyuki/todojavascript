// ESLint が提供する JavaScript のおすすめルール集
//（no-unused-vars など、基本的な品質チェックが入る）
import js from "@eslint/js";

// グローバル変数定義（window / document など）をまとめたライブラリ
import globals from "globals";

// ESLint v9（Flat Config）用の設定ヘルパー
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    // 対象ファイル：
    // すべての JavaScript ファイル（.js / .mjs / .cjs）
    files: ["**/*.{js,mjs,cjs}"],

    // ESLint の JavaScript プラグインを有効化
    plugins: { js },

    // ESLint が公式に推奨している基本ルールセットを適用
    // コーディング品質の最低限チェックをしてくれる
    extends: ["js/recommended"],

    // 言語オプション
    languageOptions: {
      // ブラウザ環境のグローバル変数を有効化
      // window, document, console などで no-undef エラーを出さない
      globals: globals.browser,
    },
  },

  {
    // 対象ファイル：
    // すべての .js ファイル
    files: ["**/*.js"],

    // 言語仕様の指定
    languageOptions: {
      // ES Modules を使用する設定
      // import / export を使ってもエラーにならないようにする
      sourceType: "module",

      // 使用する ECMAScript のバージョン
      // "latest" にしておくと最新仕様が使える
      ecmaVersion: "latest",
    },
  },
]);