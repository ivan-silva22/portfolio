import { Button, Container } from "react-bootstrap";
import linkedin from "../../../public/linkedin.png";
import github from "../../../public/github.png";
import SobreMi from "./SobreMi";


const Portada = () => {
    return (
        <Container className="text-center">
            <section className="contenedor-titulo">
                <div className="maquina-escribir">
                <h1 className="titulo">HI, I'M IVÁN SILVA 👋</h1>
                </div>
                <h3 className="texto-secundario">Fullstack Developer</h3>
            </section>
            <section className="mt-5">
                <Button className="btn btn-resume texto-secundario">Download Resume</Button>
            </section>
            <section className="mt-5">
                <a href="https://www.linkedin.com/in/ivan-silva22/" target="_blanck">
                    <img className="logo-contacto me-4" src={linkedin} alt="Logo de linkedin" />
                </a>
                <a href="https://github.com/ivan-silva22" target="_blanck">
                    <img className="logo-contacto" src={github} alt="Logo de github" />
                </a>
            </section>
            <SobreMi/>
        </Container>
    );
};

export default Portada;