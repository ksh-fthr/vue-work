# vue-work

@vue/cli で作成したプロジェクトを使用して、Vue の理解を深めるためにアレコレすることを目的としたものです。 したがって、完全に個人での利用を目的としたものであり、更新のたびに以前の機能が無くなることがあります。

# ブランチについて

基本的にそのとき確認した内容ごとにブランチを切ります。 現在は次のブランチがあります。

- [master](https://github.com/ksh-fthr/vue-work/tree/master)
  - **デフォルトブランチ**,  このリポジトリのマスターです。基本的にいじりません
  - 他のブランチからのマージのみ行われます
- [v2.x](https://github.com/ksh-fthr/vue-work/tree/v2.x)
  - Vue.js の v2.x で実装・動作確認したものです
  - v3.x の移行に際し、v2.x で実装したものを残すために作りました
  - 更新予定はありません
- [feature/#component_data](https://github.com/ksh-fthr/vue-work/tree/feature/%23component_data)
  - Vue.js の v2.x で実装・動作確認したものです
  - コンポーネントの親から子にデータを渡す処理を検証します
- [feature/#buefy](https://github.com/ksh-fthr/vue-work/tree/feature/%23buefy)
  - Vue.js の v2.x で実装・動作確認したものです
  - UI コンポーネント「Buefy」を導入し、モーダルダイアログを検証します
- [feature/#life_cycle](https://github.com/ksh-fthr/vue-work/tree/feature/%23life_cycle)
  - Vue.js の v2.x で実装・動作確認したものです
  - ライフサイクルを検証します
- [feature/#life_cycle2](https://github.com/ksh-fthr/vue-work/tree/feature/%23life_cycle2)
  - Vue.js の v2.x で実装・動作確認したものです
  - 動的コンポーネントと `feature/#life_cycle` で扱わなかったライフサイクルを検証します
- [feature/#routing](https://github.com/ksh-fthr/vue-work/pull/new/feature/%23routing)
  - Vue.js の v2.x で実装・動作確認したものです
  - ルーティングについて検証します
- [v3.x](https://github.com/ksh-fthr/vue-work/tree/v3.x)
  - Vue.js の v3.x で実装・動作確認したものを登録します

# Vue や Vue CLI のバージョン
v2.x の実装ブランチで扱っている Vue, Vue CLI のバージョンは以下のとおりです。

|         | Version | 備考                |
| ------- | ------- | ------------------- |
| Vue     | 2.7.8   | package.json で指定 |
| Vue CLI | 5.0.1   | `vue -V` で確認     |

v3.x の実装ブランチで扱っている Vue, Vue CLI のバージョンは以下のとおりです。

|         | Version | 備考                |
| ------- | ------- | ------------------- |
| Vue     | ^3.1.0  | package.json で指定 |
| Vue CLI | 5.0.1   | `vue -V` で確認     |


# setup

以下はセットアップの流れです

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

