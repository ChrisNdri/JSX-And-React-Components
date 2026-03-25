import Card from "react-bootstrap/Card";

function Player({ nom, age, equipe, numeroMaillot, image }) {
    return (
        <Card className="h-100 player-card shadow-sm">
            <Card.Img variant="top" src={image} alt={nom} />
            <Card.Body>
                <Card.Title>{nom}</Card.Title>
                <Card.Text>
                    <strong>Age:</strong> {age}
                </Card.Text>
                <Card.Text>
                    <strong>Equipe:</strong> {equipe}
                </Card.Text>
                <Card.Text>
                    <strong>Numero de maillot:</strong> {numeroMaillot}
                </Card.Text>
                <Card.Text>
                    <strong>Image:</strong> {image}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Player;