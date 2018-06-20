<template>
    <div class="jumbotron-fluid bg-dark">
        <div class="container">
            <div class="row" style="padding-top: 1rem;">
                <div class="col-sm-3 text-center">
                    <h5 class="text-info">Frameworks/Libraries</h5>
                    <div class="list-group">
                        <a class="animate-underline" href="https://jquery.com/" target="_blank">JQuery</a>
                        <a class="animate-underline" href="https://semantic-ui.com/" target="_blank">Semantic UI</a>
                        <a class="animate-underline" href="http://projects.sergiodinislopes.pt/flexdatalist/" target="_blank">FlexDatalist</a>
                        <a class="animate-underline" href="https://vuejs.org/" target="_blank">VueJS 2.x</a>
                        <a class="animate-underline" href="#" target="_blank">My laptop =))</a>
                    </div>
                </div>
                <div class="col-sm-3 text-center">
                    <h5 class="text-warning">Additional data</h5>
                    <div class="list-group">
                        <a class="animate-underline" href="../datajson/countries.json" target="_blank">Country database</a>
                        <a class="animate-underline" href="../datajson/vietnam.json" target="_blank">Vietnam state database</a>
                        <a class="animate-underline" href="../datajson/itemList.json" target="_blank">Shop's item database</a>
                        <a class="animate-underline" href="../datajson/categories.json" target="_blank">Categories database</a>
                    </div>
                </div>
                <div class="col-sm-6 text-center">
                    <h3 class="text-danger">Want to see something special?</h3>
                    <p class="text-info">Click this button to see the special things</p>
                    <a class="btn btn-danger" href="http://felixx.890m.com/Christmas2016/">Special Gift
                        <i class="fa fa-chevron-right"></i>
                    </a>
                </div>
            </div>
            <hr>
  			<img src="../assets/logo.png" class="mx-auto d-block" style="width:8%"> 
            <div class="text-center">
                <div class="item">Designed by
                    <a class="copyright font-weight-bold" href="http://fb.com/assassin1998sd" target="_blank">Felixx</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "FooterSection"
};
</script>

<style scoped>
a.copyright:hover {
  text-shadow: 0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1),
    0 0 30px rgba(255, 255, 255, 1), 0 0 40px #00ffff, 0 0 70px #00ffff,
    0 0 80px #00ffff, 0 0 100px #00ffff;
}
a.animate-underline {
  position: relative;
  text-decoration: none;
}

a.animate-underline::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: rgb(0, 195, 255);
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

a.animate-underline:hover::before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
</style>