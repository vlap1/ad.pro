export default {
	state: {
        orders:[]
    },
	mutations: {},
	actions: {
        //async createOrder({commit},{name, phone, adId, ownerId}) {
            async createOrder() {
            await new Promise((resolve, ) => {
                setTimeout(() => {
                    resolve()
                }, 4000)
            })
            }
        },

	getters: {}
} 