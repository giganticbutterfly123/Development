import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './cards.css'

export function DrinkItem({item}) {
  return (
    <Card border="dark" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Header>{item.name}</Card.Header>
        <ListGroup className= "list-group-flush">
          <ListGroup.Item>Temperature: {item.temperature} </ListGroup.Item>
          <ListGroup.Item>Seasonal: {item.seasonal} </ListGroup.Item>
          <ListGroup.Item>Calories: {item.calories} </ListGroup.Item>
          <ListGroup.Item>Price: {item.price} </ListGroup.Item>
          <ListGroup.Item>Size: {item.size} </ListGroup.Item>
        </ListGroup>
        <button>Add To Cart</button>
      </Card.Body>
    </Card>
  );
}