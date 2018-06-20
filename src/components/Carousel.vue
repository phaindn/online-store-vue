<template>
    <div :id="keyID" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ul class="carousel-indicators">
        <li :data-target="getId" v-for="(item, index) in list" :key="item"  :data-slide-to="index" :class="{'active' : index == 0}"></li>
    </ul>
    <!-- The slideshow -->
    <div class="carousel-inner">
        <div class="carousel-item" v-for="(item, index) in list" :key="item" :class="{'active' : index == 1}">
            <img :src="item.src" :alt="item.title">
        </div>
    </div>
    <!-- Left and right controls -->
    <a class="carousel-control-prev" :href="getId" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" :href="getId" data-slide="next">
        <span class="carousel-control-next-icon"></span>
    </a>
</div>
</template>

<script>
export default {
  name: "Carousel",
  props: ["keyID", "list"],
  computed: {
    getId: function() {
      return "#" + this.keyID;
    }
  }
};
</script>

<style scoped>
</style>
