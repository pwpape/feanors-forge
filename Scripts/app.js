const app = Vue.createApp({
    data() {
        return {
            name: 'Fëanor',
            father: 'Finwë',
            mother: 'Míriel Serindë',
            parent: ''
        }
    },
    methods: {
        showFather() {
            this.parent = this.father
        },
        showMother() {
            this.parent = this.mother
        }
    }
})

app.mount('#app')