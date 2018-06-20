<template>
  <div id="home">
    
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      stock: JSON.parse(require("../datajson/itemList.json"))
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
