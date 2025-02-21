import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, Container } from 'reactstrap';
import './content.css';
import { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button
} from "reactstrap";

function Content() {

  const [planoSelecionado, setPlanoSelecionado] = useState("");
  const [planos, setPlanos] = useState([]);

    useEffect(() => {
      fetch("/public/planos.json") // Caminho onde o JSON está salvo
        .then((response) => response.json())
        .then((data) => setPlanos(data.planos))
        .catch((error) => console.error("Erro ao carregar os planos:", error));
    }, []);

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Plano escolhido: ${planoSelecionado}`);
    };


    return (

      <div className="container_conteudo">
        {/* Metade Esquerda */}
        <div className="left-side">
          <Container>
            <h3 className='text-center fs-4'>Bem-vindo ao cadastro Lotus Health</h3>
            <br />
            <br />
            <div className="text-center fs-5">
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
          </Container>
        </div>

        {/* Metade Direita */}
        <div className="right-side">
          <Card className="m-2 p-5">
            <CardBody>

              <Form onSubmit={handleSubmit}>
                <FormGroup row>
                  <Label for="nome" sm={2}>Nome</Label>
                  <Col sm={10}>
                    <Input id="nome" name="nome" placeholder="Digite seu nome" type="text" required />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="email" sm={2}>Email</Label>
                  <Col sm={10}>
                    <Input id="email" name="email" placeholder="Digite seu email" type="email" required />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="planoSaude" sm={4}>Plano de Saúde</Label>
                  <Col sm={8}>
                    <Input
                      id="plano"
                      name="planoSaude"
                      type="select"
                      value={planoSelecionado}
                      onChange={(e) => setPlanoSelecionado(e.target.value)}
                      required
                    >
                      <option value="">Selecione um plano</option>
                      {planos.map((plano) => (
                        <option key={plano.id} value={plano.nome}>
                          {plano.nome}
                        </option>
                      ))}
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col sm={{ offset: 20, size: 10 }}>
                    <Button color="primary" type="submit">Enviar</Button>
                  </Col>
                </FormGroup>
              </Form>

            </CardBody>
          </Card>
        </div>
      </div>

    )
  }

  export default Content;
