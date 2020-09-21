<template>
  <div :class="$style.component">
    <BuefyParts/>
  </div>
</template>

<script>
import BuefyParts from '@/components/BuefyParts'

export default {
  name: 'sample-buefy',
  components: {
    BuefyParts
  }
}
</script>

<style module>
.component {
  margin-top: 50px;
}
</style>
