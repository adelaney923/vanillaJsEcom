let clickedProduct = 0

const totalDisplay = document.getElementsByClassName("total");

const buyFunction = (data) => {
  console.log("called")
  clickedProduct = clickedProduct + data
  totalDisplay[0].innerHTML = "Total: $" + `${clickedProduct}`;
}

const getData = () => {
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then((data) => {
      for (const product of data) {
        var productContainer = document.getElementsByClassName('product-info')
        const title = document.createElement("p").innerHTML= `${product.title}`
        const image = document.createElement("img")
        image.className = "product-img"
        image.src = `${product.image}`;
        const price = document.createElement("p").innerHTML = `${product.price}`
        const buyButton = document.createElement("button")
        buyButton.innerText = "Buy"
        buyButton.onclick = (() => buyFunction(product.price))
        productContainer[0].append(title)
        productContainer[0].append(image)
        productContainer[0].append(price)
        productContainer[0].append(buyButton)
      }
    })
}

getData()




