<template>
  <div :class="$style.component">
    <UserList :properties="properties" />
  </div>
</template>

<script>
// @ is an alias to /src
import UserList from '@/components/UserList.vue'

export default {
  name: 'Users',

  components: {
    UserList
  },
  data: function () {
    return {
      properties: {
        loading: true,
        users: [],
        error: null
      }
    }
  },

  watch: {
    '$route': 'fetchData'
  },

  created: function () {
    this.fetchData()
  },

  methods: {
    fetchData: function () {
      let self = this
      getUsers(function (err, users) {
        self.properties.loading = false
        if (err) {
          self.properties.error = err.toString()
        } else {
          self.properties.users = users
        }
      })
    }
  }
}

function getUsers (callback) {
  setTimeout(function () {
    callback(null, [
      {
        id: 1,
        name: 'hogehoge',
        live: 'Japan Tokyo',
        phone: 'NNN-XXXX-HHHH',
        gender: 'male',
        mail: 'hogehoge@mail.com'
      },
      {
        id: 2,
        name: 'barbar',
        live: 'Japan Kanagawa',
        phone: 'NNN-XXXX-BBBB',
        gender: 'male',
        mail: 'barbar@mail.com'
      },
      {
        id: 3,
        name: 'piypiyo',
        live: 'Japan Kanagawa',
        phone: 'NNN-XXXX-PPPP',
        gender: 'female',
        mail: 'piypiyo@mail.com'
      },
      {
        id: 4,
        name: 'fugafuga',
        live: 'Japan Chiba',
        phone: 'NNN-XXXX-FFFF',
        gender: 'male',
        mail: 'fugafuga@mail.com'
      },
      {
        id: 5,
        name: 'varvar',
        live: 'Japan Saitama',
        phone: 'NNN-XXXX-VVVV',
        gender: 'female',
        mail: 'varvar@mail.com'
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
