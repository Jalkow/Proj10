import { Col, Container, Row } from 'react-bootstrap';

export default function Footer(){
    return(
        <Container fluid className="footer-container">
            <Row className="justify-content-md-center">
                <Col xs={12}>
                    <p>&copy; Gayming 2022 - tous droits réservés</p>    
                </Col>
                <Col xs={12}>
                    <h2>Mentions légales :</h2>
                    <p>Contact : dgehant@gaming.tech</p>
                    <p>Adresse : 16 Rue de l'Université, 69007 Lyon</p>
                </Col>
            </Row>    
        </Container>
    );
}