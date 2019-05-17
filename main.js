
var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'This is a small description of the product',
        imageColor: 'green',
        imageUrl: `./assets/vmSocks-green.jpg`,
        link: 'https://www.google.com',
        inventory: 10,
        inStock: true,
        brand: 'Noel',
        details: ['80% cotton', '20% polyster', 'Gender-neutral'],
        variants: [
            {
                id: 1,
                color: 'green',
                variantUrl: './assets/vmSocks-green.jpg',
            },
            {
                id: 2,
                color: 'blue',
                variantUrl: './assets/vmSocks-blue.jpg',
            },
        ],
        cart: 0,
    },
    computed: {
        title() {
            return `${this.brand} ${this.product}`;
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
            this.inventory -= 1;
            this.inventory > 0 ? this.inStock = true : this.inStock = false;
            console.log(this.inventory, this.inStock)
        },
        updateProduct(variantUrl) {
            this.imageUrl = variantUrl;
        }
    },
});
