import WalletConnectProvider from '@walletconnect/web3-provider'
// import { mapState } from 'vuex'

export const state = () => ({
    walletConnect: null
})

export const mutations = {
    setWalletConnect (state, walletConnect) {
        state.walletConnect = walletConnect
    }
}

export const actions = {
    async connectWalletConnect ({ commit, state}) {
        if (!state.walletConnect) {
            // new instant of walletConnect 
            const provider = new WalletConnectProvider({
                // infuraId: process.env.INFURA_ID
                infuraId: '2IPfeagR7vKqnh5nQ2HE5E4ghHM'
            })

            // connect to the walletConnect
            await provider.enable()

            // save the walletConnect instance to the store
            commit('setWalletConnect', provider)
        }

        // get the accounts
        return state.walletConnect.accounts
    }
}