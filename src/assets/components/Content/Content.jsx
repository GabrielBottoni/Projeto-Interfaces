import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, Container, Alert } from 'reactstrap';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button
} from 'reactstrap';
import './content.css';

function Content() {
  const [planoSelecionado, setPlanoSelecionado] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [planos, setPlanos] = useState([]);
  const [feedback, setFeedback] = useState({ visible: false, message: "", type: "" });

  useEffect(() => {
    fetch("/planos.json")
      .then((response) => response.json())
      .then((data) => setPlanos(data.planos))
      .catch((error) => console.error("Erro ao carregar os planos:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!nome || !email || !planoSelecionado) {
      setFeedback({
        visible: true,
        message: "Por favor, preencha todos os campos obrigatórios.",
        type: "warning"  
      });
      setTimeout(() => setFeedback({ visible: false, message: "", type: "" }), 4000);
      return;
    }

    if (!email.includes('@')) {
      setFeedback({
        visible: true,
        message: "Por favor, insira um e-mail válido",
        type: "warning"
      });
      setTimeout(() => setFeedback({ visible: false, message: "", type: "" }), 3000);
      return;
    }
    
    console.log("Cadastro do usuário:", { nome, email, planoSelecionado });
    
    setFeedback({
      visible: true,
      message: `Obrigado, ${nome}! Você escolheu o plano: ${planoSelecionado}`,
      type: "success"
    });
    setTimeout(() => setFeedback({ visible: false, message: "", type: "" }), 4000);
    
    setNome("");
    setEmail("");
    setPlanoSelecionado("");
  };

  return (
    <div className="container_conteudo">
      <div className="left-side">
        <Container>
          <h3 className="text-center fs-4">Bem-vindo ao cadastro Lotus Health</h3>
          <br /><br />
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

      <div className="right-side">
        <Card className="m-2 p-5">
          <CardBody>

            {feedback.visible && (
              <Alert color={feedback.type}>
                {feedback.message}
              </Alert>
            )}

            <Form onSubmit={handleSubmit} noValidate>
              <FormGroup row>
                <Label for="nome" sm={4}>Nome</Label>
                <Col sm={8}>
                  <Input
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="email" sm={4}>Email</Label>
                <Col sm={8}>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Digite seu email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="planoSaude" sm={5}>Plano de Saúde</Label>
                <Col sm={7}>
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
                <Col sm={{ offset: 12, size: 10 }}>
                  <Button color="primary" type="submit" className='mt-3'>Enviar</Button>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Content;
