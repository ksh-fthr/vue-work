<template>
  <div>
    <h1>This page is user list.</h1>
    <div
      v-if="properties.loading"
      :class="$style.loading">
      Loading Now...
    </div>
    <div
      v-if="properties.error"
      :class="$style.error">
      {{ error }}
    </div>
    <div :class="$style.userlist">
      <b-table
        :data="properties.users"
        :columns="columns"
        :striped="true"
        :hoverable="true"
        :selected.sync="selected" />
    </div>
    <div :class="$style.showmore">
      <b-button
        type="is-info"
        @click="showMoreInformation">
        Show more selected...
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    properties: {
      type: Object,
      'default': () => { return null },
    }
  },
  data: function() {
    return { 
      selected: this.properties.users[0],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '50',
          numeric: true
        },
        {
          field: 'name',
          label: 'NAME',
          width: '400',
          centered: true
        },
        {
          field: 'mail',
          label: 'MAIL',
          width: '400',
          centered: true
        },
      ]
    }
  },
  methods: {
    showMoreInformation: function() {
      // アロー関数で定義すると `this` で `selected` が参照できない｡
      // 詳細は https://qiita.com/_Keitaro_/items/d48733a19c10889e2365 を参照のこと｡
      if (!this.selected) {
        alert('No data selected...')
        return false
      }
      const selected = this.selected
      alert('Page will be change...')
      this.$router.push({ name: 'user-detail', params: {id: selected['id']}})
    }
  }
}
</script>

<style module>

.userlist {
  margin: auto;
  width: 100%;
  /* 子要素を中央に配置する */
  display: flex;
  justify-content: center;
  align-items: center;
}

.usertable {
  border: solid 1px;
  width: 90%;
  border-collapse: collapse;
  /* 子要素を中央に配置する */
  justify-content: center;
  align-items: center;
}
.tablehead {
  border: solid 1px;
  border-collapse: collapse;
}

.tablerecord {
  border: solid 1px;
  border-collapse: collapse;
}
</style>
