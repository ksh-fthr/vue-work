<template>
  <div id="app">
    <div 
      id="nav" 
      class="tab-area-base">
      <ul class="tab-menu-base">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/users">User List</router-link></li>
        <li><router-link to="/sample-buefy">Sample Buefy</router-link></li>
        <li><router-link to="/life-cycle">Life Cycle</router-link></li>
        <li><router-link to="/life-cycle2">Life Cycle2</router-link></li>
        <li><router-link to="/routing">Rounting Test</router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<style>
html, body {
  height: 100%;
  width: 100%;
}

h1 {
  font-size: 36px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div.tab-area-base {
  height: 0px;
  width: 90%;
  margin: auto;
}

ul.tab-menu-base {
  overflow: hidden;
  list-style: none;
  margin: 0px auto;
  padding: 0;
}

ul.tab-menu-base li {
  float: left;
  margin: 0px 1px 0 0 ;
  padding: 0;
  background: rgb(241, 240, 240);
  border-radius: 10px 10px 0 0;
  height: 100%;
  width: 130px;
  font-size: 1.1em;
  text-align: center;
}

ul.tab-menu-base li.current {
  background: rgb(240, 240, 240);
}
</style>
