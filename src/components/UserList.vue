<template>
  <div>
    <h1>This page is user list.</h1>
    <div class="loading" v-if="properties.loading">Loading Now...</div>
    <div class="error" v-if="properties.error">
      {{ error }}
    </div>
    <div v-for="user in properties.users" :key="user.id">
      <h2>{{ user.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  props: ['properties']
}
</script>
