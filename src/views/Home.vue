<template>
<<<<<<< Updated upstream
  <div class="row">
    <div class="col-8">
      <router-view/>
    </div>
    <div class="col-4"></div>
=======
  <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
>>>>>>> Stashed changes
  </div>
</template>

<script>
<<<<<<< Updated upstream
import store from "@/store.js";

export default {
  data() {
    return store;
  },
  name: "home"
};
</script>
=======
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
>>>>>>> Stashed changes
