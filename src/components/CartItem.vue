<template>
    <div class="item" :data-id="id" :data-color="color">
        <img class="ui tiny image" src="../assets/404.png" style="max-width:100%">
        <div class="content">
            <a class="header"> {{name}} </a>
            <div class="description">
                <div class="very relaxed header">Color:
                   <b style="color: ' + color + '">{{color}}</b>
               </div>
                <div class="header">Quantity:
                    <div class="ui small basic icon buttons">
                        <button class="ui button" onclick="decrease($(this))">
                           <i class="left chevron icon"></i></button>
                        <button class="ui disabled button quantity">{{number}}</button>
                        <button class="ui button" onclick="increase($(this))">
                           <i class="right chevron icon"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="right floated content">
            <div class="ui small yellow basic label">
                <i class="ui bitcoin icon"></i>{{amount}}
            </div>
            <br>
            <a class="ui small red basic label" onclick="removeFromCart($(this))">
                <i class="ui cut icon"></i> Delete</a>
        </div>
        </div>
</template>

<script>
export default {
  name: "CartItem",
  props: ["id", "color", "name", "number", "price"],
  computed: {
    amount: function() {
      return number * price;
    }
  }
};
</script>

<style scoped>
</style>
