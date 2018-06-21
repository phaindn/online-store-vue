<template>
    <div :id="keyID" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ul class="carousel-indicators">
        <li :data-target="getId" v-for="(item, index) in list" :key="item"  :data-slide-to="index" :class="{'active' : index == 0}"></li>
    </ul>
    <!-- The slideshow -->
    <div class="carousel-inner">
        <div class="carousel-item" v-for="(item, index) in list" :key="item" :class="{'active' : index == 0}">
            <center>
            <img :src="require('../assets/shop/'+item.img[0])" :alt="item.name" width="460" height="345">
            </center>
        </div>
    </div>
    <!-- Left and right controls -->
    <a class="carousel-control-prev" :href="getId()" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" :href="getId()" data-slide="next">
        <span class="carousel-control-next-icon text-black-50"></span>
    </a>
    
</div>
</template>

<script>
export default {
  name: "Carousel",
  props: ["keyID", "list"],
  methods: {
    getId: function() {
      return "#" + this.keyID;
    },
    getImg: function(src) {
      return "../assets/shop/" + src;
    }
  }
};
</script>

<style scoped>
a[data-slide] {
  background: rgba(156, 153, 153, 0.5);
}
</style>
