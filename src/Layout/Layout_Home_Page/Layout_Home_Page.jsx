import Card from "../../Components/Card/Card";
import { Container, Row } from "react-bootstrap";
import Salma from "../../assets/images/Wedding_Girl.jpg";
import Dimash from "../../assets/images/Wedding_Boy.jpg";
import "./Layout_Home_Page.css";
import Card_Foto_Kiri from "../../Components/Card/CardFotoKiri";

const Layout_Home_Page = () => {
  return (
    <div id="home" className="home">
      <Container>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2>Acara Pernikahan</h2>
            <h3>Diselenggarakan pada 20 November 2023 di Tanggerang, Banten</h3>
            <p>
              Oleh karena itu, dengan segala hormat, kami bermaksud untuk
              menggundang Bapak/Ibu, Saudara/i, untuk hadir pada acara
              pernikahan kami
            </p>
          </div>
        </div>
        <Row className="couple">
          <Card
            name={"Salma"}
            fatherName={"Sugeng"}
            motherName={"Endang"}
            description={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            }
            image={Salma}
          />

          <Card_Foto_Kiri
            name={"Dimash"}
            fatherName={"Suratman"}
            motherName={"Reti"}
            description={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            }
            image={Dimash}
          />
        </Row>
      </Container>
    </div>
  );
};

export default Layout_Home_Page;
