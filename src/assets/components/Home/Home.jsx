import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [planos, setPlanos] = useState([]);

  useEffect(() => {
    fetch("/public/planos.json")
      .then((response) => response.json())
      .then((data) => setPlanos(data.planos))
      .catch((error) => console.error("Erro ao carregar os planos:", error));
  }, []);

  return (
    <Container className="mt-5 mb-5 pt-5 container-home">
      <h3 className="text-center fs-4 mb-4">
        Bem-vindo à Lotus Health - Cuidando do Seu Bem-Estar
      </h3>
      <div className="text-center fs-5 mb-5">
        <p>
          Na Lotus Health, acreditamos que a saúde é o bem mais valioso. Nosso compromisso é oferecer um
          atendimento humanizado, acessível e de alta qualidade, garantindo que você e sua família tenham
          a tranquilidade de contar com uma rede de cuidados completa.
        </p>
        <p>
          Com planos personalizados, ampla cobertura e uma equipe de profissionais qualificados,
          a Lotus Health está aqui para proporcionar mais segurança, conforto e qualidade de vida para você.
        </p>
        <p>
          Porque sua saúde merece florescer!
        </p>
      </div>

      <Row>
        {planos.map((plano) => (
          <Col key={plano.id} md="4" className="mb-4">
            <Card className="h-100 mb-0 card-translucido">
              <CardBody>
                <CardTitle tag="h5" className="mb-3">{plano.nome}</CardTitle>
                <CardText>{plano.descricao}</CardText>
                <Link to="/content">
                <Button color="primary" className="mt-4">Saiba Mais</Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
