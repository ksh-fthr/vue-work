<template>
  <div class="lifecycle">
    <h1>{{ properties.sentence }}</h1>
  </div>
</template>

<script>
export default {
  name: "lifecycle",
  data: function () {
    return {
      properties: {
        sentence: "This page is life cycle lifecycle",
      },
    };
  },

  /* ################################ ライフサイクル ################################ */
  /**
   *  [公式](https://jp.vuejs.org/v2/api/index.html#beforeCreate) から拝借｡
   *
   * データの監視とイベント/ウォッチャのセットアップより前の、インスタンスが初期化されるときに同期的に呼ばれます。
   */
  beforeCreate: function () {},

  /**
   * [公式](https://jp.vuejs.org/v2/api/index.html#created) から拝借｡
   *
   * インスタンスが作成された後に同期的に呼ばれます。
   * この段階では、インスタンスは、データ監視、算出プロパティ、メソッド、watch/event コールバックらの
   * オプションのセットアップ処理が完了したことを意味します。
   * しかしながら、マウンティングの段階は未開始で、`$el` プロパティはまだ利用できません。
   */
  created: function () {},

  /**
   * [公式](https://jp.vuejs.org/v2/api/index.html#beforeMount) から拝借｡
   *
   * `render` 関数が初めて呼び出されようと、マウンティングが開始される直前に呼ばれます。
   */
  beforeMount: function () {},

  /**
   * [公式](https://jp.vuejs.org/v2/api/index.html#mounted) から拝借｡
   *
   * 新たに作成される `vm.$el` によって置き換えられる `el` に対して、インスタンスがマウントされたちょうど後に呼ばれます。
   * ルートインスタンスがドキュメントの中の要素にマウントされる場合、`vm.$el` も `mounted` が呼び出されるときにドキュメントの中に入ります。
   * `mounted` は 全ての子コンポーネントもマウントされていることを保証**しない**ことに注意してください。
   * ビュー全体がレンダリングされるまで待つ場合は、 `mounted` の代わりに
   * [vm.$nextTick](https://jp.vuejs.org/v2/api/index.html#vm-nextTick) を使うことができます。
   *
   * このフックはサーバサイドレンダリングでは呼ばれません。
   */
  mounted: function () {},

  /**
   * [公式](https://jp.vuejs.org/v2/api/index.html#beforeUpdate) から拝借｡
   *
   * データが変更されるとき、DOM が適用される前に呼ばれます。
   * これは、更新前に既存の DOM にアクセスするのに適しています。
   * 例: 手動で追加されたイベントリスナを削除する
   *
   * このフックはサーバサイドレンダリングでは呼ばれません。
   * サーバサイドでは初期描画のみ実行されるためです。
   */
  beforeUpdate: function () {},

  /**
   * [公式](https://jp.vuejs.org/v2/api/index.html#updated) から拝借｡
   *
   * データが変更後、仮想 DOM が再描画そしてパッチを適用によって呼ばれます。
   * このフックが呼び出されるとき、コンポーネントの DOM は更新した状態になり、このフックで DOM に依存する操作を行うことができます。
   * しかしがながら、ほとんどの場合、無限更新ループに陥る可能性があるため、このフックでは状態を変更するのを回避すべきです。
   *
   * `updated` は 全ての子コンポーネントも再レンダリングされていることを保証**しない**ことに注意してください。
   * ビュー全体が再レンダリングされるまで待つ場合は、 `updated` の代わりに
   * [vm.$nextTick](https://jp.vuejs.org/v2/api/index.html#vm-nextTick) を使うことができます。
   * このフックはサーバサイドレンダリングでは呼ばれません。
   */
  updated: function () {},

  /**
   * [公式](https://jp.vuejs.org/v2/api/index.html#beforeDestroy) から拝借｡
   *
   * > Vue インスタンスが破棄される直前に呼ばれます。
   * この段階ではインスタンスはまだ完全に機能しています。
   *
   * **このフックはサーバサイドレンダリングでは呼ばれません。**
   */
  beforeDestroy: function () {},

  /**
   * [公式](https://jp.vuejs.org/v2/api/index.html#destroyed) から拝借｡
   *
   * Vue インスタンスが破棄された後に呼ばれます。
   * このフックが呼ばれるとき、Vue インスタンスの全てのディレクティブはバウンドしておらず、
   * 全てのイベントリスナは削除されており、そして全ての子の Vue インスタンスは破棄されています。
   *
   * このフックはサーバサイドレンダリングでは呼ばれません。
   */
  destroyed: function () {},

  /* ################################ オプション ################################ */
  /**
   * [公式](https://jp.vuejs.org/v2/api/index.html#activated) から拝借｡
   *
   * 生き続けたコンポーネントが活性化するとき呼ばれます。
   * このフックはサーバサイドレンダリングでは呼ばれません。
   */
  activated: function () {},

  /**
   * [公式](https://jp.vuejs.org/v2/api/index.html#deactivated) から拝借｡
   *
   * 生存し続けたコンポーネントが非活性化されるとき呼ばれます。
   * このフックはサーバサイドレンダリングでは呼ばれません。
   */
  deactivated: function () {},

  /**
   * [公式](https://jp.vuejs.org/v2/api/index.html#errorCaptured) から拝借｡
   *
   * 任意の子孫コンポーネントからエラーが捕捉されるときに呼び出されます。
   * フックは、エラー、エラーをトリガするコンポーネントインスタンス、
   * そしてどこでエラーが捕捉されたかの文字列情報、これら 3 つの引数を受け取ります。
   * フックはエラーがさらにもっと伝播するのを防ぐために、`false` を返すことができます。
   */
  errorCaptured: function () {},
};
</script>
