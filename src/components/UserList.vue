<template>
  <div>
    <h1>This page is user list.</h1>
    <!-- <div class="loading" v-if="loading">Loading Now...</div> -->
    <!-- <div class="error" v-if="error"> -->
      <!-- {{ error }} -->
    <!-- </div> -->
    <div v-for="user in users" :key="user.id">
      <h2>{{ user.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  props: ['users']
}
/*
var List = {
  data: function () {
    return {
      loading: false,
      users: function () { return [] },
      error: null
    }
  },

  created: function () {
    this.fetchData()
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData: function () {
      this.loading = true
      getUsers(function (err, users) {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.users = users
        }
      }).bind(this)
    }
  }
}

var getUsers = function (callback) {
  setTimeout(function () {
    callback(null, [
      {
        id: 1,
        name: 'hogehoge'
      },
      {
        id: 2,
        name: 'barbar'
      }
    ])
  }, 1000 * 1)
}
*/
</script>
