import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const nayoks = ['Razzak', 'Jashim', 'Alomgir', 'Salman']
  const products = [
    {name: 'PhotoShop', price: '$90.99'},
    {name: 'Illustrator', price: '$70.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          <li>{nayoks[0]}</li>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd =><Product product={pd}></Product>)
        }
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
 
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUsers(data));
  }, [])
 
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}



function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count +1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
    </div>
  )
}




function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
  }
  const {name, price} = props.product;
  console.log(name, price)
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
  <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
