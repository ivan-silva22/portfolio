import { Col, Row } from "react-bootstrap";
import html from "../../../public/html-5.png";
import css from "../../../public/css-3.png";
import js from "../../../public/js.png";
import php from "../../../public/php.png";
import express from "../../../public/expresar.png";
import react from "../../../public/react.svg";
import mongo from "../../../public/mongo-db.png";
import mysql from "../../../public/mysql.png";
import figma from "../../../public/figma.png";
import postman from "../../../public/postman.png";
import visual from "../../../public/visual-studio-code.png";
import git from "../../../public/git.png";

const Tecnologias = () => {
  return (
    <section className="tecnologias">
      <article>
        <h2 className="titulo">STACK</h2>
        <hr className="linea" />
      </article>
      <Row className="my-5">
        <Col md={4}>
          <img className="icono-tecnologia" src={html} alt="Icono de HTML5" />
        </Col>
        <Col md={4}>
          <img className="icono-tecnologia" src={css} alt="Icono de CSS" />
        </Col>
        <Col md={4}>
          <img className="icono-tecnologia" src={js} alt="Icono de JS" />
        </Col>
        <Col md={4} className="my-4">
          <img className="icono-tecnologia" src={php} alt="Icono de PHP" />
        </Col>
        <Col md={4} className="my-4">
          <img
            className="icono-tecnologia"
            src={express}
            alt="Icono de EXPRESS"
          />
        </Col>
        <Col md={4} className="my-4">
          <img className="icono-tecnologia" src={react} alt="Icono de REACT" />
        </Col>
        <Col md={4}>
          <img className="icono-tecnologia" src={mongo} alt="Icono de MONGO" />
        </Col>
        <Col md={4}>
          <img className="icono-tecnologia" src={mysql} alt="Icono de MYSQL" />
        </Col>
        <Col md={4}>
                <img className="icono-tecnologia" src={figma} alt="Icono de FIGMA" />
            </Col>
            <Col md={4} className="my-4">
                <img className="icono-tecnologia" src={postman} alt="Icono de POSTMAN" />
            </Col>
            <Col md={4} className="mt-4">
                <img className="icono-tecnologia" src={visual} alt="Icono de VS" />
            </Col>
            <Col md={4} className="mt-4">
                <img className="icono-tecnologia" src={git} alt="Icono de GIT" />
            </Col>
      </Row>
    </section>
  );
};

export default Tecnologias;
