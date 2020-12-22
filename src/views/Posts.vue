<template>
  <div v-if="store.authenticated">
    <button @click="newImage()" type="Novi post" class="btn btn-primary ml-2">Post new image</button>
    <div :key="post.id" v-for="post in dailyPost">
      <PostOfTheDay :info2="post" /> 
    </div>
    <div @click="gotoDetails(card)" :key="card.id" v-for="card in cards">
      <InstagramCard :info="card" />
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import InstagramCard from "@/components/InstagramCard.vue";
import PostOfTheDay from "@/components/PostOfTheDay.vue";
import store from "@/store.js";
import {Posts} from "@/services"; // @ - src 


export default {
  data() {
    return {
      store,
      cards: [],
      dailyPost: []
    };
  },
  watch: {
    "store.searchTerm": _.debounce(function(val) {
      this.fetchPosts(val);
    }, 500)
    //"store.searchTerm": function(val) {this.fetchPosts(val)}
  },
  mounted() {
    this.fetchPosts();
     console.log('Podaci s backenda:', this.cards)

     
  },
  name: "posts",
  methods: {
  
     async fetchPosts(term) {
        term = term || store.searchTerm
        this.cards = await Posts.getAll(term)
        console.log('Podaci s backenda:', this.cards)
        //WA-502
        this.dailyPost = await Posts.postOfTheDay()
        console.log('daily post:', this.dailyPost)
    },

    gotoDetails(card) {
      this.$router.push({ path: `post/${card.id}` });
    },
    newImage() {
      this.$router.push({ name: "newpost" }).catch(err => console.log(err));
    }
  },

  components: {
    InstagramCard,
    PostOfTheDay
  }
};
</script>

<style scoped>
button {
  margin-bottom: 20px;
}
</style>