<template>
  <div>
    <template v-if="!$route.meta.allowAnonymous">
      <v-app >
        <Header></Header>
        <sidebar></sidebar>
        <v-content>
          <router-view/>
        </v-content>
        <Footer></Footer>
      </v-app>
  </template>
  <template v-else>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
  </template>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      drawer: true
    }
  }
}
</script>