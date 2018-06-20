<template>
  <li class="nav-item">
    <h4 class="text-white my-time">
      <i class="fa fa-clock-o"></i>
      {{time}} 
    </h4>
  </li>
    <!-- <div class="item" v-on:load="startCount()">
        <i class="ui big outline clock icon"></i>
        <div id="timer" style="font-size: 1.6em;">{{time}}</div>
    </div> -->
</template>
<script>
export default {
  name: "Timer",
  data() {
    return {
      interval: 0,
      time: "00:00:00"
    };
  },
  mounted() {
    this.startCount();
  },
  methods: {
    getTime: function() {
      var date = new Date();
      return date.toTimeString().slice(0, 8);
    },
    startCount: function() {
      this.interval = setInterval(() => {
        this.time = this.getTime();
      }, 999);
    }
  }
};
</script>

<style scoped>
.my-time {
  /* padding-top: 0.3rem; */
  margin: 0.3rem 1rem;
}
</style>
