# Learning Vue.js

## 概要
これは私個人がvue.jsを勉強するためにさまざまなリファレンスを参考にしながら学んだことをまとめるためのリポジトリです。  
READMEで学んだことをまとめていきます。これはREADMEとしては使い方は間違っていると思いますがどのタイミングで何を勉強し、どう使うのか
その時々にコードと比較しながらまとめたいと思ったためこのような方法をとっています。  

## 環境
Vue.js v2.6.12  
npm v7.11.2  
chrome v89  

## ルール
直下のディレクトリではCDN(Content Delivery Network)を用いた実装を行っており、  
vue_npmディレクトリではnpmを用いてnode_modulesの中にあるvue.jsを利用した開発を行っています。  
今後は  
CDN:説明  
npm:説明  
というようにそれぞれの特徴が現れる時には説明をしていきます。  

## 本編
### はじめに
### Hello World
Hello worldではVue.jsの基本的な使い方を勉強します。  

利用方法  
CDN:  
scriptタグでCDNで公開されているライブラリを利用する  
```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```
<br>

npm:  
npmでvueをインストールする  
```bash
$ npm install vue
```
<br>
インストールされたvueはnode_modules/vue/distディレクトリ下にあるので  

```html
<script src="./node_modules/vue/dist/vue.js"></script>
```
というようにしてライブラリを利用する  

### ディレクティブ
### v-text
---

```html
<!-- v-text -->
<div id="app-101">
  <div v-text="message"></div>   <!-- この行と -->
  <div>{{ message }}</div>       <!-- この行は、同じ意味を持ちます -->
</div>

<script>
  var app101 = new Vue({
    el: '#app-101',
    data: { message: 'Hello!' }
  })
</script>
```
<br>

### v-html
---

```html
<!-- v-html -->
<div id="app-102">
  <div v-text="message"></div>    <!-- 置換される -->
  <div v-html="message"></div>    <!-- 置換されない -->
</div>
<script>
var app102 = new Vue({
  el: '#app-102',
  data: { message: '<b>Hello!</b>' }
})
</script>
```
<br>

このようにhtmlタグを読み取って描画してくれる  
しかし脆弱性を含むためクロスサイトスクリプティングに注意しなければならない  
TODO: 要勉強

### v-show
---

```html
<!-- v-show -->
<div id="app-103">
  <input type="checkbox" @click="change" checked>
  <span v-show="seen">Hello!</span>
</div>
<script>
var app103 = new Vue({
  el: '#app-103',
  data: { seen: true },
  methods: {
    change: function(e) {
      this.seen = e.target.checked
    }
  }
})
</script>
```
<br>

v-showで指定されたプロパティの真偽値をとってきてtrueなら表示、falseならstyle="display: none;"として非表示にする  
また、vue用のメソッドを用意することができ、methods: {}の中に  
<br>
*メソッド名: 関数定義*  
<br>
とすることでメソッドを定義することができ、htmlのタグで@click="関数名"とすることで関数を呼び出すことができます  
@はv-onの省略記法で@に続く修飾子に対応するイベントハンドラを定義することができます  
**＊のちのapp-108参照**  

### v-if  
---  

```html
<!-- v-if -->
<div id="app-104">
  <input type="checkbox" @click="change" checked>
  <span v-if="seen">Hello!</span>
</div>
<script>
  const app104 = new Vue({
    el: '#app-104',
    data: { seen: true },
    methods: {
      change: function (e) {
        this.seen = e.target.checked
      }
    }
  })
</script>
```
<br>

v-ifで指定されたプロパティの真偽値をとってきてtrueなら描画、falseなら描画しないというように制御する  
v-showではstyleでdisplay:noneとして非表示にするのに対してv-ifではそもそも要素の有無によって描画する・しないを制御できる  

### v-else
---

```html
<!-- v-else -->
<div id="app-105">
  <input type="checkbox" @click="change" checked>
  <span v-if="seen">Hello!</span>
  <span v-else>Bye!</span>
</div>
<script>
  const app105 = new Vue({
    el: '#app-105',
    data: { seen: true },
    methods: {
      change: function (e) {
        this.seen = e.target.checked
      }
    }
  })
</script>
```
<br>

v-ifにあてはまらなかった場合の描画処理を制御する  
if else  

### v-else-if
---

```html
<!-- v-else-if -->
<div id="app-106">
  <input type="radio" name="app106-type" onclick="app106.type='A'" checked>
  <input type="radio" name="app106-type" onclick="app106.type='B'">
  <input type="radio" name="app106-type" onclick="app106.type='C'">
  <span v-if="type=='A'">Good morning.</span>
  <span v-else-if="type=='B'">Hello!</span>
  <span v-else>Bye!</span>
</div>
<script>
  const app106 = new Vue({
    el: '#app-106',
    data: { type: 'A' }
  })
</script>
```
<br>

v-ifの条件に当てはまらなかった場合の他の条件に該当する場合の描画処理を制御する  
条件の書き方はv-ifと同じ  

### v-for
---

```html
<!-- v-for -->
<div id="app-107">
  <ul>
    <li v-for="color in colorList">{{ color }}</li>
  </ul>
</div>
<script>
  const app107 = new Vue({
    el: '#app-107',
    data: { colorList: ['Red', 'Green', 'Blue'] }
  })
</script>
```
<br>

data内部の配列を元にループによる描画処理を制御する  
v-for="item in itemList"の書き方  
item:配列の要素, itemList:data内部の配列  
で配列の要素数回描画する
