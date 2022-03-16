import api from "../libs/axios"
import {Container, Col, Row, Card, Button} from 'react-bootstrap'

export async function getStaticProps() {
    const result = await api.get("https://api.twitch.tv/helix/games/top");
    console.log(result)
    const games = result.data.data;
    console.log(games)
  
    return {
      props: {
        games,
      },
    };
  }

export default function Games_store({ games }){
    return(
        <Container fluid>
            <Row className="justify-content-md-center">
                {
                    games.map(function(game, i){
                        return(
                            <Col key={i} xs={{span: 10, offset: 1}} md={{span: 6, offset: 0}} lg={3}>
                                <Card>
                                    <Card.Img variant="top" src={game.box_art_url} />
                                    <Card.Body>
                                    <Card.Title>{game.name}</Card.Title>
                                    <Button variant="success">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )  
                    })
                }
            </Row>
        </Container>
    );
}