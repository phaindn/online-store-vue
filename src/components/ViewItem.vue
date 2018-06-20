<template>
  <div id="home">
    <h4 class="text-primary">{{msg}}</h4>
  </div>
</template>

<script>
export default {
  name: "ViewItem",
  data() {
    return {
      msg: "I'm a Item viewer"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
