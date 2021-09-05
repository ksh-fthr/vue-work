<template>
  <div :class="$style.component">
    <h1>This is an about page</h1>
    <Collapse/>
  </div>
</template>

<script>
import Collapse from '@/components/Collapse'

export default {
  name: 'About',
  components: {
    Collapse
  }
}
</script>

<style module>
.component {
  margin-top: 50px;
}
</style>
