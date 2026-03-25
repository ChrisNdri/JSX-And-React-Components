import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Player from "./player";
import { players } from "./players";

function PlayersList() {
  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Liste des Joueurs</h1>
      <Row className="g-4">
        {players.map((joueur) => (
          <Col key={joueur.nom} xs={12} md={6} lg={3}>
            <Player
              nom={joueur.nom}
              age={joueur.age}
              equipe={joueur.equipe}
              numeroMaillot={joueur.numeroMaillot}
              image={joueur.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PlayersList;