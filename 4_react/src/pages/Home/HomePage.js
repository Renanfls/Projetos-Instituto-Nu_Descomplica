"use client";
import { Card } from "@/components/Card/Card";
import { Notification } from "@/components/Notification/Notification";
import { ModalCreateFolder } from "@/containers/ModalCreateFolder/ModalCreateFolder";
import { ModalSavePin } from "@/containers/ModalSavePin/ModalSavePin";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export const HomePage = () => (
  <>
    <ModalSavePin open={false} />
    <ModalCreateFolder open={false} />
    <Notification
      message="Criado com sucesso"
      onClose={() => {
        console.log("Clicou em fechar");
      }}
    />
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <Card
            title="Card title"
            image="https://picsum.photos/200/135?53"
            total={0}
          />
        </Col>
        <Col xs={12} md={4}>
          <Card
            title="Card title"
            image="https://images.pexels.com/photos/2928867/pexels-photo-2928867.jpeg?auto=compress&cs=tinysrgb&w=1600"
            total={0}
          />
        </Col>
        <Col xs={12} md={4}>
          <Card
            title="Card title"
            image="https://images.pexels.com/photos/2928867/pexels-photo-2928867.jpeg?auto=compress&cs=tinysrgb&w=1600"
            total={0}
          />
        </Col>
      </Row>
    </Container>
  </>
);
