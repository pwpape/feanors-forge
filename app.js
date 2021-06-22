const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                {title: "The Silmarillion", author: "J.R.R. Tolkien", img: 'assets/1.jpg', isFav: true},
                {title: "The Name of the Wind", author: "Patrick Rothfuss", img: 'assets/2.jpg', isFav: false},
                {title: "Infinite Jest", author: "David Foster Wallace", img: 'assets/3.jpg', isFav: true}
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    }
})

app.mount('#app')