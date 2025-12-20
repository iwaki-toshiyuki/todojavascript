// ExpressモジュールからExpressアプリケーションであるappオブジェクト作成
const express = require('express');
const app = express();

// ルートパスにGETリクエストでHello World!を返す
app.get('/', (req, res) => {
  res.send('Hello World!');
});
 
// ポート3000でサーバーを起動
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});