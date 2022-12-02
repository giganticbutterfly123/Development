import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './cards.css'


export function DrinkItem({item, updateCart, index, price, setPrice}) {
  return (
    <Card border="dark" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Header>{item.name}</Card.Header>
        <Card.Img variant="top" src={item.image} />
        <ListGroup className= "list-group-flush">
          <ListGroup.Item>Temperature: {item.temperature} </ListGroup.Item>
          <ListGroup.Item>Seasonal: {item.seasonal} </ListGroup.Item>
          <ListGroup.Item>Calories: {item.calories} </ListGroup.Item>
          <ListGroup.Item>Price: {item.price} </ListGroup.Item>
          <ListGroup.Item>Size: {item.size} </ListGroup.Item>
        </ListGroup>
        <button onClick={()=>{updateCart(index); setPrice(price+item.price)}}>Add to Cart</button>
        <button onClick={()=>{setPrice(price-item.price)}}> Remove from Cart </button>
      </Card.Body>
    </Card>
  );
}
