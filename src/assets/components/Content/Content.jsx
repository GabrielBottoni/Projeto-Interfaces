import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody } from 'reactstrap';
import './content.css';
import { useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Plano escolhido: ${planoSelecionado}`);
  };


  return (

    <div className="container_conteudo">
      {/* Metade Esquerda */}
      <div className="left-side">

        <h2>Bem-vindo à Lotus Health – Cuidando do Seu Bem-Estar</h2>
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

      {/* Metade Direita */}
      <div className="right-side">
        <Card className="my-2" style={{ width: '85%' }}>
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
                <Label for="planoSaude" sm={3}>Plano de Saúde</Label>
                <Col sm={9}>
                  <Input
                    id="planoSaude"
                    name="planoSaude"
                    type="select"
                    value={planoSelecionado}
                    onChange={(e) => setPlanoSelecionado(e.target.value)}
                    required
                  >
                    <option value="">Selecione um plano</option>
                    <option value="Basico">Lotus Health - Básico</option>
                    <option value="Intermediario">Lotus Health - Intermediário</option>
                    <option value="Premium">Lotus Health - Premium</option>
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
