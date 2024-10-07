const { ShoppingCart } = require("./shoppingCart");

describe("ShoppingCart", () => {
  it("should add a new product in the list", () => {
    const shoppingCart = new ShoppingCart();
    shoppingCart.products = [
      { id: 1, price: 3 },
      { id: 2, price: 5 }
    ];
    shoppingCart.addProduct({ id: 3, price: 2 })
    expect(shoppingCart.products).toMatchObject([
      { id: 1, price: 3 },
      { id: 2, price: 5 },
      { id: 3, price: 2 }
    ]);
  });

  it("should return a error if product has price equal or less than 0", () => {
    const shoppingCart = new ShoppingCart()
    expect (() =>shoppingCart.addProduct({id: 1, price : 0})).toThrow(new Error('Invalid price'))

  })


  it("should remove product from the list", () => {
    const shoppingCart = new ShoppingCart();
  
    // Adiciona produtos ao carrinho
    shoppingCart.addProduct({ id: 1, price: 3 });
    shoppingCart.addProduct({ id: 2, price: 5 });
    shoppingCart.addProduct({ id: 4, price: 6 });
  
    // Remove o produto com ID 2
    shoppingCart.removeProduct(2);
  
    // Verifica se o produto foi removido corretamente
    expect(shoppingCart.products).toMatchObject([
      { id: 1, price: 3 },
      { id: 4, price: 6 }
    ]);
  });
  


  it("deve retornar o valor total dos produtos no carrinho", () => {
    const shoppingCart = new ShoppingCart();
    
    // Adiciona dois produtos ao carrinho
    shoppingCart.addProduct({ id: 1, price: 10 });
    shoppingCart.addProduct({ id: 2, price: 15 });
    
    // Verifica se o valor total é 25
    expect(shoppingCart.getTotalPrice()).toBe(25);
  });
  

});

