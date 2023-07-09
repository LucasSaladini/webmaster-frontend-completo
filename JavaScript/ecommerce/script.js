const itemsCart = [
    {
        id: 0,
        name: 'camiseta',
        img: 'assets/image.jpg',
        quantity: 1
    },
    {
        id: 1,
        name: 'shorts',
        img: 'assets/image.jpg',
        quantity: 1
    },
    {
        id: 2,
        name: 'sapato',
        img: 'assets/image.jpg',
        quantity: 1
    }
]

initializeStore = () => {
    var containerProducts = document.getElementById('products')
    itemsCart.map((val) => {
        containerProducts.innerHTML+= `
            <div class="product-single">
                 <img src=`+val.img+` />
                 <p>`+val.name+`</p>
                 <a key="`+val.id+`" href="#">Adicionar ao carrinho</a>
             </div>
        `
    })
}

initializeStore()

updateCart = () => {
    var containerCart = document.getElementById('cart')
    containerCart.innerHTML = ""
    itemsCart.map((val) => {
        if(val.quantity > 0) {
            containerCart+= `
                <p>`+val.name+` | quantidade: `+val.quantity+`</p>
            `
        }
    })
}

var links = document.getElementsByName('a')

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        let key = this.getAttribute('key')
        itemsCart[key].quantity++
        updateCart()
        return false
    })
}