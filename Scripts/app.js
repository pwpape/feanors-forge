const app = Vue.createApp({
    data() {
        return {
            title: 'The Silmarillion',
            author: 'J.R.R. Tolkien',
            rings: 1,
            race: 'Men'
        }
    },
    methods: {
        increaseRings() {
            this.rings++
        },
        decreaseRings() {
            this.rings--
        },
        changeRace() {
            this.race = 'Elves'
        }
    }
})

app.mount('#app')