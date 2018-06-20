<template>
    <modal id="hiddenModal" class="ui modal">
    <div class="ui raised very padded text main container segment">
        <div class="ui bottom right attached label">Press ESC to hide modal</div>
        <form class="ui form" action="checkout.jsp" method="POST">
            <h4 class="ui dividing header">Shipping Information</h4>
            <div class="field">
                <label>Name</label>
                <div class="field">
                    <input type="text" name="nickname" placeholder="Your nickname">
                </div>
            </div>
            <div class="field">
                <label>Billing Address</label>
                <div class="fields">
                    <div class="twelve wide field">
                        <input type="text" name="address1" placeholder="Street Address">
                    </div>
                    <div class="four wide field">
                        <input type="text" name="address2" placeholder="Apt #">
                    </div>
                </div>
            </div>
            <div class="two fields">
                <div class="field">
                    <label>State</label>
                    <div class="ui icon input">
                        <input type='text' id="State" placeholder="State" class='flexdatalist dropdown' data-data='datajson/vietnam.json' data-search-in='name' data-min-length='0' name='State' onchange='loadState()'>
                        <i class="dropdown icon"></i>
                    </div>
                </div>
                <div class="field">
                    <label>District/Town</label>
                    <div class="ui icon input">
                        <input type='text' id="Town" placeholder="District/Town" class='flexdatalist' list="townList" data-selection-required='true' data-min-length='0' name='town'>
                        <i class="dropdown icon"></i>
                        <datalist id="townList">
                                <option value="">District/Town</option>
                        </datalist>
                    </div>
                </div>
            </div>
            <h4 class="ui dividing header">Billing Information</h4>
            <div class="fields">
                <div class="eight wide field">
                    <label>Wallet Type</label>
                    <div class="ui selection dropdown">
                        <input type="hidden" name="cardType">
                        <div class="default text">Type</div>
                        <i class="dropdown icon"></i>
                        <div class="menu">
                            <div class="item" data-value="visa">
                                <i class="bitcoin icon"></i> Coinbase
                            </div>
                            <div class="item" data-value="amex">
                                <i class="bitcoin icon"></i> Circle
                            </div>
                            <div class="item" data-value="discover">
                                <i class="bitcoin icon"></i> Bitgo
                            </div>
                            <div class="item" data-value="discover">
                                <i class="bitcoin icon"></i> Mycelium
                            </div>
                            <div class="item" data-value="discover">
                                <i class="bitcoin icon"></i> Blockchain
                            </div>
                            <div class="item" data-value="discover">
                                <i class="bitcoin icon"></i> Armory
                            </div>
                            <div class="item" data-value="discover">
                                <i class="bitcoin icon"></i> Hive
                            </div>
                        </div>
                    </div>
                </div>
                <div class="eight wide field">
                    <label>Wallet ID</label>
                    <input type="text" name="walletId" maxlength="16" placeholder="Wallet#ID">
                </div>
            </div>
            <div class="ui segment">
                <div class="field">
                    <div class="ui toggle checkbox">
                        <input type="checkbox" name="gift" tabindex="0" class="hidden">
                        <label>Do not include a receipt in the package</label>
                    </div>
                </div>
            </div>
            <button class="ui primary button" type="submit">Submit Order</button>
        </form>
    </div>
    </modal>
</template>

<script>
export default {
  name: "ModalPrompt"
};
</script>

<style scoped>
</style>
