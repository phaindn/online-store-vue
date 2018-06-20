<template>
  <div id="home" class="container">
    <h2 class="text-danger text-center">Welcome home!</h2>
    <Carousel :list="get(0,9)" keyID="sales"></Carousel>
  </div>
</template>

<script>
import Carousel from "./Carousel";
export default {
  name: "Home",
  data() {
    return {
      stock: require("../datajson/itemList.json")
    };
  },
  methods: {
    get: function(start, noOfElement) {
      var result = [];
      for (
        let i = start;
        i < this.stock.length && i - start < noOfElement;
        i++
      ) {
        result.push(this.stock[i]);
      }
      return result;
    }
  },
  components: {
    Carousel
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
