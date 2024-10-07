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
    this.products = this.products.filter(product => product.id !== productId);
    return this.products;
  }
  

getTotalPrice() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }




  
}




module.exports = {
  ShoppingCart
}
