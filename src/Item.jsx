function Item({ index, name, price, handleDeleteProduct }) {
  const clickMe = () => {
    alert(name)
  }

  return (
    <div>
      <h4>{name}</h4>
      <h5>{price.toLocaleString()} VND</h5>
      <button onClick={() => clickMe()}>Buy</button>
      <button onClick={() => handleDeleteProduct(index)}>Delete</button>
      <hr />
    </div>
  )
}

export default Item
