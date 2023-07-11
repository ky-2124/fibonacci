'use strict';
const memo = new Map();  //memoという定数のMapを作成
memo.set(0, 0);  //0というキーに0という値を設定、キー：順番　値：答え
memo.set(1, 1);  //1というキーに1という値を設定

function fib(n) {  //nを引数とするfibという名前の関数を定義
  if (memo.has(n)) {  //もし定数memoがnというキーを保持していれば
    return memo.get(n);  //定数memoのキーのnを返す？
  }
  const value = fib(n - 1) + fib(n - 2);  //定数valueを定義
  memo.set(n, value);  //nというキーに定数valueを設定
  return value;  //定数valueを返す
}

const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));  //fib()関数をここで使っている。

}