<template>
  <div :class="$style.lifecycle2">
    <div :class="$style.wrapchild">
      <input 
        id="Lifecycle21" 
        v-model="selectedComponent" 
        type="radio" 
        value="Lifecycle21">
      <label for="Lifecycle21">Lifecycle21</label>
    </div>
    <div :class="$style.wrapchild">
      <input 
        id="Lifecycle22"
        v-model="selectedComponent" 
        type="radio" 
        value="Lifecycle22">
      <label for="Lifecycle22">Lifecycle22</label>
    </div>

    <h1>selected component is ... {{ selectedComponent }}.</h1>

    <keep-alive>
      <component 
        :is="selectedComponent" 
        :class="$style.lifecycle2_child_area"/>
    </keep-alive>

  </div>
</template>

<script>
import Lifecycle21 from '@/components/LifeCycle2-1.vue'
import Lifecycle22 from '@/components/LifeCycle2-2.vue'

export default {
  name: 'Lifecycle2',
  components: {
    Lifecycle21,
    Lifecycle22
  },
  data: function() {
    return {
      selectedComponent: '',
      properties: {
        message: 'default value.',
      },
    }
  },

  /* ################################ ライフサイクル ################################ */
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
  beforeUpdate: function() {
    // 注意!!
    // beforeUpdate と updated で同じ変数に対してデータを更新かけると無限ループに陥る
    console.log(`[LifeCycle2] beforeUpdate. this.properties.message = ${this.properties.message}`)
  },

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
  updated: function() {
    // 注意!!
    // beforeUpdate と updated で同じ変数に対してデータを更新かけると無限ループに陥る
    console.log(`[LifeCycle2] updated. this.properties.message = ${this.properties.message}`)
  },

  /**
   * [公式](https://jp.vuejs.org/v2/api/index.html#errorCaptured) から拝借｡
   *
   * 任意の子孫コンポーネントからエラーが捕捉されるときに呼び出されます。
   * フックは、エラー、エラーをトリガするコンポーネントインスタンス、
   * そしてどこでエラーが捕捉されたかの文字列情報、これら 3 つの引数を受け取ります。
   * フックはエラーがさらにもっと伝播するのを防ぐために、`false` を返すことができます。
   */
  errorCaptured: function() {
    console.log(`[LifeCycle2] errorCaptured. this.properties.message = ${this.properties.message}`)
  }, 
}
</script>

<style module>
.lifecycle2 {
    height: 100%;
    width: 100%;
}

.wrapchild {
    margin: 20px;
    display: inline-block;
}

.lifecycle2_child_area {
    margin-top: 20px;
    height: 200px;
    width: 100%;
}

.message {
    width: 400px;
}
</style>
