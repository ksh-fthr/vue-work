<template>
  <div :class="$style.component">
    <div :class="$style.parent">
      <div :class="$style.child">
        <h1>Routing Test Page</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Routing'
}
</script>

<style module>
.component {
  margin-top: 50px;
}

.parent {
  height: 500px;
  width: 100%;

  /* 子要素を中央に配置する */
  display: flex;
  justify-content: center;
  align-items: center;
}

.child {
  overflow: hidden;
  height: 100%;
  width: 100%;

  /* 子要素を中央に配置する */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
