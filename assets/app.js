const App = {}

App.products = [
  {
    id: 1,
    name: 'Product 1',
    desc: 'Thiis is a sample product thats awesome. Makes you want to buy it.',
    price: 1.0,
    image: 'item1.png',
  },
  {
    id: 2,
    name: 'Product 2',
    desc: 'Thiis is a sample product thats awesome. Makes you want to buy it.',
    price: 7.5,
    image: 'item2.png',
  },
  {
    id: 3,
    name: 'Product 3',
    desc: 'Thiis is a sample product thats awesome. Makes you want to buy it.',
    price: 18.0,
    image: 'item3.png',
  },
  {
    id: 4,
    name: 'Product 4',
    desc: 'Thiis is a sample product thats awesome. Makes you want to buy it.',
    price: 17.0,
    image: 'item4.png',
  },
  {
    id: 5,
    name: 'Product 5',
    desc: 'Thiis is a sample product thats awesome. Makes you want to buy it.',
    price: 8.0,
    image: 'item5.jpg',
  },
  {
    id: 6,
    name: 'Product 6',
    desc: 'Thiis is a sample product thats awesome. Makes you want to buy it.',
    price: 145.0,
    image: 'item6.jpg',
  },
]

$(() => {
  App.products.forEach((product) => {
    $('#products').append(`
     <div class="col-sm-4 mb-4">
                <div class="card">
                    <img src="assets/img/${product.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${product.desc}</li>
                        <li class="text-right btn">Ksh. ${product.price}</li>
                    </ul>
                    <div class="card-body d-flex justify-content-between">
                        <a href="#" class="btn btn-warning">Like</a>
                        <a href="#" onclick="App.addToCart(event, ${product.id})" class="btn btn-success">Add to Cart</a>
                    </div>
                </div>
            </div>`)
  })
})
