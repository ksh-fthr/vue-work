# vue-work

@vue/cli で作成したプロジェクトを使用して、Vue の理解を深めるためにアレコレすることを目的としたものです。 したがって、完全に個人での利用を目的としたものであり、更新のたびに以前の機能が無くなることがあります。

# ブランチについて

基本的にそのとき確認した内容ごとにブランチを切ります。 現在は次のブランチがあります。

- [master](https://github.com/ksh-fthr/vue-work/tree/master)
  - このリポジトリのマスターです。基本的にいじりません
  - 他のブランチからのマージのみ行われます
- [feature/#component_data](https://github.com/ksh-fthr/vue-work/tree/feature/%23component_data)
  - コンポーネントの親から子にデータを渡す処理を試す
- [feature/#buefy](https://github.com/ksh-fthr/vue-work/tree/feature/%23buefy)
  - UI コンポーネント「Buefy」を導入し、モーダルダイアログを検証します
- [feature/#life_cycle](https://github.com/ksh-fthr/vue-work/tree/feature/%23life_cycle)
  - ライフサイクルを検証します
- [feature/#life_cycle2](https://github.com/ksh-fthr/vue-work/tree/feature/%23life_cycle2)
  - 動的コンポーネントと `feature/#life_cycle` で扱わなかったライフサイクルを検証します


# Vue や Vue CLI のバージョン
本リポジトリで扱っている Vue, Vue CLI のバージョンは以下のとおりです。

|         | Version | 備考 |
| ------- | ------- | ---- |
| Vue     | 2.6.11  |      |
| Vue CLI | 4.1.1   |      |


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
