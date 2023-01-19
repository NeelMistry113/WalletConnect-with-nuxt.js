<template>
    <div class="btn">
        <button @click="connect">Connect Wallet</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

    export default {
        name: 'WalletConnectN',
        methods: {
            ...mapActions(['connectWalletConnect']),
            async connect() {
                try {
                    const accounts = await this.connectWalletConnect()
                    console.log(accounts)
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
</script>

<style scoped>
.btn{
    /* width: 100vw; */
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
}

.btn button {
    padding: 14px 24px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 16px;
    border: 1px solid black;
    cursor: pointer;
    background: #000;
    color: aliceblue;
}
</style>