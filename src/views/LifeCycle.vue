<template>
  <div class="lifecycle">
    <UserList :properties="properties" />
  </div>
</template>

<script>
// @ is an alias to /src
import UserList from '@/components/LifeCycleVerification.vue'

export default {
  name: 'lifecycle',
}
</script>
