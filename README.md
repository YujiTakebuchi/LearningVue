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

npm:  
npmでvueをインストールする  
```bash
npm install vue
```
インストールされたvueはnode_modules/vue/distディレクトリ下にあるので  
```html
<script src="./node_modules/vue/dist/vue.js"></script>
```
というようにしてライブラリを利用する  