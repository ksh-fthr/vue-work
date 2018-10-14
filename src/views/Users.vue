<template>
  <div class="users">
    <UserList :users="list" />
  </div>
</template>

<script>
// @ is an alias to /src
import UserList from '@/components/UserList.vue'

export default {
  name: 'users',
  data: function () {
    return {
      list: [
        {
          id: 1,
          name: 'hogehoge'
        },
        {
          id: 2,
          name: 'barbar'
        }
      ]
    }
  },
  components: {
    UserList
  }
}

</script>
