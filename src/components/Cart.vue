<template>
    <!-- <div class="right floated item" id="cartCount">
        <button class="ui red button">
            <i class="ui cart icon"></i> Cart
            <div class="floating ui teal label" id="counterrr">{{counter}}</div>
        </button>
        <div class="ui popup top left transition hidden" style="min-width: 500px;">
            <div class="ui divided list scrollable" id="inCart">
                <CartItem v-for="item in list" :key="item"></CartItem>
            </div>
            <div class="ui divider"></div>
            <div class="ui right floated green button" id="checkOut" onclick="showModal()">Checkout</div>
        </div>
        <div class="ui yellow basic label">
            <i class="ui bitcoin icon"></i>{{total}}
        </div>
    </div> -->
    

        <div class="my-2 my-lg-0">
            <button class="btn btn-danger">
                    <i class="fa fa-shopping-cart"></i>
                    Cart
                <span class="badge badge-pill badge-info badge-floating">
                    {{counter}}
                </span>
            </button>
            <span class="badge badge-warning">
                <i class="fa fa-btc"></i>
                {{total.toFixed(6)}}
            </span>
        </div>

</template>

<script>
    import CartItem from "./CartItem.vue";
    export default {
        name: "Cart",
        data() {
            return {
                counter: 0,
                list: [],
                total: 0.00
            };
        },
        components: {
            CartItem
        }
    };
</script>

<style>
    .badge-floating {
        top: -0.7rem !important;
        right: 0.5rem !important;
    }
</style>