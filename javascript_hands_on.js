/**
 * const,letの変数宣言
 */

// var変数は上書きが可能
// var val1 = "var変数";
// console.log(val1);

// var val1 = "var変数da";
// console.log(val1);

//var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// letは上書きが可能
let val2 = "let変数";
console.log(val2);

val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可能
// let val2 = "let変数を再宣言";

//constは上書きも再宣言も不可能
const val3 = "const変数";
console.log(val3);

//val3 = "const変数を上書き";

//const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
    name: "toy",
    age: 34,
};

console.log(val4);

val4.name = "toytoy";
val4.address = "Osaka";
console.log(val4);

//constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
console.log(val5);

val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
const name = "toytoy";
const age = 34;

//従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
console.log(message1);

//テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

/**
 * アロー関数
 */
//従来の関数
function func1(str) {
    return str;
}
console.log(func1("func1です"));

//アロー関数
const func2 = (str) => {
    return str;
};
console.log(func2("func2です"));

//省略形
const func3 = (str) => str;
console.log(func3("func3です"));

const func4 = (num1, num2) => {
    return num1 + num2;
};
console.log(func4(10, 20));

const func5 = (num1, num2) =>( {
    hoge: num1,
    fuga: num2,
});
console.log(func5(10, 20));

/**
 * 分割代入
 */
const myProfile = {
    name1: "toytoy",
    age1: 34,
};

// const message3 = `名前は${myProfile.name1}です。年齢は${myProfile.age1}歳です。`;
// console.log(message3);

//分割代入を用いた方法
const { name1, age1 } = myProfile;
const message4 = `名前は${name1}です。年齢は${age1}歳です。`;
console.log(message4);

//配列の分割代入
const myProfile2 = ['toytoy', 34];

const [name2, age2] = myProfile2;
const message5 = `名前は${name2}です。年齢は${age2}歳です。`;
console.log(message5);

/**
 * デフォルト値、引数など
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello("toytoy");
sayHello();

// 分割代入のデフォルト値
const sayHello2 = {
    age3: 34,
}

const { age3, name3 = "ゲスト" } = sayHello2;
console.log(`名前は${name3}です。年齢は${age3}歳です。`);

/** 
 * オブジェクトの省略記法
 */
const name4 = "toytoy";
const age4 = 34;

const myProfile3 = {
    name4,
    age4,
    //以下、省略前の記法
    //name4: name4,
    //age4: age4,
};
console.log(myProfile3);

/**
 * スプレッド構文 ...
 */

//配列の展開
const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
//sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2; //分割代入
console.log(num1);
console.log(num2);
console.log(arr3);//残りの数字を配列として取得

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

//以下の書き方は参照渡しになるため、arr4が変更されてしまう
// const arr8 = arr4;;
// arr8[0] = 100;
// console.log(arr4);

/** * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "佐藤"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(nameArr[index]);
//     console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

//mapを使った方法
// const nameArr2 = nameArr.map((name) =>{
//     return name;
// });
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));
//console.log(nameArr2);
//nameArr.map((name) => console.log(name));

console.log(nameArr);

//filterを使った方法
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
    return num % 2 === 1;
});
console.log(newNumArr);

//if文を用いて名前に「さん」をつける処理
const newNameArr = nameArr.map((name) => {
    if (name === "佐藤") {
        return name;
    } else {
        return `${name}さん`;
    }
});
console.log(newNameArr);

/**
 * 三項演算子   
 */
//ある条件 ? 条件がtrueの時 : 条件がfalseの時
const val6 = 1 > 0 ? "trueです" : "falseです";
console.log(val6);

const num3 = 1300;

//toLocaleStringメソッドは数値を3桁ごとにカンマで区切る
//console.log(num3.toLocaleString());

//三項演算子を用いてnum3が数値ならカンマ区切り、そうでなければ「数値を入力してください」と表示する処理
//typeof演算子： 変数の型を調べる
const formattedNum = typeof num3 === 'number' ? num3.toLocaleString() : '数値を入力してください';
console.log(formattedNum);

//関数で三項演算子を用いる例
const checkSum = (num4, num5) => {
    return num4 + num5 > 100 ? '100を超えています!' : '許容範囲内です';
};
console.log(checkSum(50, 40));
console.log(checkSum(50, 60));

/** 
 * 論理演算子の本当の意味を知る  && と ||
 */
//truthy,falsyの概念
// "ABC" 0 10 null undefined NaN "" false [] {}

//truthyとfalsyの確認
// const val = "ABC"; //中身を随時変更して確認する
// if (val) {
//     console.log("valはtruthyです");
// } else {
//     console.log("valはfalsyです");
// }

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
    console.log("1か2はtrueになります");
}

if (flag1 && flag2) {
    console.log("1も2もtrueになります");
}

// || は左側がtruthyならその時点で返却する
const num6 = null;
const fee = num6 || "金額未設定です";
console.log(fee);

// && は左側がfalsyならその時点で返却する
const num7 = 100;
const fee2 = num7 && "何か設定されました";
console.log(fee2);




