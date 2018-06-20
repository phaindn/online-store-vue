<template>
    <li class="nav-item">
        <!-- <div class="ui action icon input" id="searchBox"> -->
            <!-- <input type="text" placeholder="Search..." id="searchInput"> -->
            <div class="form-inline">
                <input type="text" placeholder="Search..." name="query" class="form-control mr-sm-1">
                <select class="form-control" name="searchType">
                    <option value="">Select category</option>
                    <option value="All">All type</option>
                    <option v-for="item in categories" :value="item" :key="item">{{item}}</option>
                </select>
                <button class="btn btn-warning float-right" type="submit">
                    <i class="fa fa-search"></i>
                </button>
            </div> 
       
            <!-- <select name="searchType" id="searchType" class="ui selection dropdown">
                <option value="">Select category</option>
                <option value="All">All type</option>
                <option v-for="item in categories" :value="item" :key="item">{{item}}</option>
            </select>
            <button class="ui icon button" onclick="searchItem()">
                <i class="ui search icon"></i>
            </button> -->
        <!-- </div> -->
    </li>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SearchBox",
  computed: mapGetters({
    categories: "getCategories"
  })
};
</script>

<style scoped>
</style>
