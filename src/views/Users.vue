<template>
  <div :class="$style.component">
    <UserList :properties="properties" />
  </div>
</template>

<script>
// @ is an alias to /src
import UserList from '@/components/UserList.vue'

export default {
  name: 'users',
  data: function () {
    return {
      properties: {
        loading: true,
        users: function () { return [] },
        error: null
      }
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
      var self = this
      getUsers(function (err, users) {
        self.properties.loading = false
        if (err) {
          self.properties.error = err.toString()
        } else {
          self.properties.users = users
        }
      })
    }
  },

  components: {
    UserList
  }
}

function getUsers (callback) {
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
</script>

<style module>
.component {
  margin-top: 50px;
}
</style>
