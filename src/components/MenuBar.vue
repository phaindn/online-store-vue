<template>
    <nav class="navbar navbar-expand-md navbar-fixed-top bg-danger navbar-danger">
        <div class="container">
            <a href="#" class="navbar-brand text-white" onclick="homepage()">
                <img class="logo" src="../assets/logo.png"> 
                CryptoShop
            </a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#collapsibleNavbar">
                 <i class="fa fa-bars" style="color: white"></i>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav mr-auto">
                    <SearchBox></SearchBox>
                    <Timer></Timer>
                </ul>
                <Cart></Cart>
            </div>
        </div>
    </nav>
</template>

<script>
import Cart from "./Cart";
import Timer from "./Timer";
import SearchBox from "./SearchBox";
export default {
  name: "MenuBar",
  components: {
    Cart,
    Timer,
    SearchBox
  }
};
</script>

<style scoped>
img.logo {
  width: 2rem;
}
</style>