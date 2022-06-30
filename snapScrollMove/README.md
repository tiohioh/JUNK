# snap scroll move
CSSのSnap-scroll-typeによって実装された横方向の連結要素のスクロールを行うクラスです。大した機能はありませんがSnapScrollの要素をJSで操作する方法を解説した記事がほぼなかったので作成しました(SnapScrollでない場合とやり方は同じです。むしろ位置合わせが適当でいいので楽です。)。

## 参考
- https://www.yoheim.net/blog.php?q=20120420
- https://zenn.dev/phi/articles/modern-javascript-css-carousel

# 仕様(22/6/29現在)
最新版の仕様です。おそらくメソッドを廃止することはそうないと思います。

## snapScrollMove(constractor)
引数に指定したDOMのを返却します。
### argment
DOM 親要素のDOM

## moveTo
SnapScrollを指定したindexまで動かします。指定したindexが範囲外のときは5で割ったあまりを返却します。引数が負数のときの挙動は未定義です。
### argment
Number (Index)
### return
移動後のindex(indexが存在する範囲のときはそのまま)を返却します。

## getIndex
現在のindexを更新しindexを返却します。
### argment
なし
### return
現在のindexを返却します

## 
# Tips
そのまま使用すると画像が一瞬で切り替わってしまいSnapScrollを使用する意味がなくなります。スムーススクロールを使用する場合は以下のコードを親要素に対して挿入してください。
※対応ブラウザが少ないため注意
```CSS:smoothScroll.css
scroll-behavior: smooth;
```


# 例
./example/ 内を参照のこと
```javascript:example.js
//5秒ごとに1つ右のSnapにシフトし最終のSnapのあとに0番に戻る
var ssm = new snapScrollMove(document.querySelector("hoge"));
setInterval(() => ssm.moveTo(ssm.getIndex() + 1), 5000);
```
