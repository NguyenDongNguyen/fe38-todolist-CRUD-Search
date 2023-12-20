import { useState } from 'react'
import { Button, Input } from 'antd'

import Filter from './Filter'
import Item from './Item'

function Main(props) {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [nameError, setNameError] = useState('')
  const [priceError, setPriceError] = useState('')

  const [products, setProducts] = useState([
    {
      name: 'iPhone 15',
      price: 22000000,
    },
    {
      name: 'iPhone 15 Pro',
      price: 28000000,
    },
    {
      name: 'iPhone 14 Pro',
      price: 24000000,
    },
  ])
  console.log('🚀 ~ file: Main.jsx:28 ~ Main ~ products:', products)

  const handleAddProduct = () => {
    let isValid = true

    if (!productName) {
      setNameError('Name bắt buộc!')
      isValid = false
    } else if (productName.length < 3) {
      setNameError('Name phải lớn hơn 3 kí tự!')
      isValid = false
    } else {
      setNameError('')
    }

    if (!productPrice) {
      setPriceError('Price bắt buộc!')
      isValid = false
    } else {
      setPriceError('')
    }

    if (isValid) {
      const newProducts = [
        ...products,
        {
          name: productName,
          price: parseInt(productPrice),
        },
      ]
      setProducts(newProducts)
      setProductName('')
      setProductPrice('')
    }
  }

  const handleDeleteProduct = (index) => {
    const newProduct = [...products]
    newProduct.splice(index, 1)
    setProducts(newProduct)
  }

  const renderProductItems = products.map((item, index) => {
    return (
      <Item
        key={index}
        index={index}
        name={item.name}
        price={item.price}
        handleDeleteProduct={handleDeleteProduct}
      />
    )
  })

  return (
    <>
      <h2>Main</h2>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <div>Input value: {text}</div>
      <div>
        <Input onChange={(e) => setText(e.target.value)} value={text} />
      </div>
      <button onClick={() => setText('Tuan')}>Set text is Tuan</button>
      <Filter />
      {renderProductItems}
      <div>
        <input
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          placeholder="Name"
        />
        <span>{nameError}</span>
        <input
          type="number"
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
          placeholder="Price"
        />
        <span>{priceError}</span>
        <div>
          <Button type="primary" onClick={() => handleAddProduct()}>
            Add
          </Button>
        </div>
      </div>
    </>
  )
}

export default Main
