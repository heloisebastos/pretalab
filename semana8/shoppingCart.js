class ShoppingCart {
  products = []
  totalPrice = 0

  addProduct = (product) => {
    if (product.price <= 0){
      throw new Error('Invalid price')    }
    this.products.push(product)
    let totalPrice = 0
    this.products.forEach(item => {
      totalPrice += item.price
    })
    this.totalPrice = totalPrice
  }

  removeProduct = (productId) => {
    this.productId = this.products.filter(p => p.id !== productId.id)
    return this.productId 
  }


  someValueProduct = (productId) => {

    //  Retorne o valor total dos produtos no carrinho

  }


  //Refatore o código e crie novos cenários de testes se necessário */


  
}




module.exports = {
  ShoppingCart
}
