import React from 'react';
import logo from './logo.svg';
import './App.css';


const ProductsStatic = [
  {
    name: "Product 1",
    image: "data:image/jpeg;base64,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",
    price: 100,
    available: true,
    purchase: false
  },
  {
    name: "Product 2",
    image: "https://www-file.huawei.com/-/media/corp2020/home/box/1/watchgt2-mob.jpg",
    price: 200,
    available: true,
    purchase: false
  },
  {
    name: "Product 3",
    image: "https://static.livebooks.com/abc61dbc6e9c403b917975eb48d2d97d/i/f2c81f819c994f5eb2312f9948520c2a/1/4SoifmQp7LJ6yDtMuFY2x/Swan-Optic-22089.jpg",
    price: 300,
    available: true,
    purchase: false
  },
  {
    name: "Product 4",
    image: "https://marketing.fitbit.com/images/compare/intro/compare-hero-fall-2020/devices-5c9ae1d2f8cafbfaac3ffbfcbb9b41ee.png",
    price: 400,
    available: true,
    purchase: false
  },
  {
    name: "Product 5",
    image: "https://www.seventhgeneration.com/sites/default/files/styles/1600w/public/2020-07/mbcampaign-hp-productcarouselpersonalcare-998x790.jpg?itok=EbJB9ky5",
    price: 20,
    available: true,
    purchase: false
  },
  {
    name: "Product 6",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRc-tWemy3BPyZtGPXYUd7kUgQXizU4O-pXNg&usqp=CAU",
    price: 50,
    available: true,
    purchase: false
  }
]

function App() {
  const [Products, setProducts] = React.useState(ProductsStatic);

  const [points, setPoints] = React.useState(0)
  const [price, setPrice] = React.useState(0)
  const purchaseProduct = (priceProduct, index) => {
    Products[index].purchase = true
    setProducts(Products)
    let newPrice = price + priceProduct
    setPrice(newPrice)
    calculatePoints(newPrice)
  }

  const removeProduct = (priceProduct, index) => {
    Products[index].purchase = false
    setProducts(Products)
    let newPrice = price - priceProduct
    setPrice(newPrice)
    calculatePoints(newPrice)
  }

  const calculatePoints = (totalPrice) => {
    let points = 0
    if (totalPrice > 100) {
      totalPrice = totalPrice - 100
      points = points + totalPrice * 2 + 50
    } else if (totalPrice > 50) {
      totalPrice = totalPrice - 50
      points = points + totalPrice * 1
    }
    setPoints(points)
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>Total price => {price}</p>
        <p>Your Points => {points}</p>
        <div className="productsWrapper">
          {Products.map((product, index) => (
            <div className="productWrapper">
              <div style={{
                backgroundImage: `url(${product.image})`,

              }} className="imageCss"></div>
              <span className="ml10">{product.name}</span>
              <span className="ml10">price : {product.price}$</span>
              <br />
              {!product.purchase ? <button className="buttonCss ml10" onClick={() => purchaseProduct(product.price, index)}>Purchase</button> : <button className="buttonCss ml10 rejectButton" onClick={() => removeProduct(product.price, index)}>Remove</button>}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
