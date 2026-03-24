
import './App.css';
import { products } from './product';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import { Card } from 'react-bootstrap';


const firstName = "Chris"; 

function App() {
  return (
    <div className="container mt-4">
      {products.map((product, index) => (
        <Card key={index} className="mb-4 shadow-lg border-0" style={{ width: '20rem' }}>

          <Image product={product} />


          <Card.Body>
            <Card.Title className="text-primary fw-bold">
              <Name product={product} />
            </Card.Title>
            <Card.Text className="text-muted">
              <Description product={product} />
            </Card.Text>
            <Card.Text className="fw-semibold text-success">
              <Price product={product} />
            </Card.Text>
          </Card.Body>


          <Card.Footer className="bg-light text-center">
            {firstName ? (
              <>
                <h5 className="text-info">Hello, {firstName} !</h5>
                <img
                  src="https://static.wikia.nocookie.net/jujutsu-kaisen/images/9/9b/Satoru_Gojo_%28Anime_2%29.png/revision/latest"
                  alt="avatar"
                  className="rounded-circle mt-2 border border-info"
                />
              </>
            ) : (
              <h5 className="text-secondary">Hello, there !</h5>
            )}
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}

export default App;
