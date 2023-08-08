import { Col, Container, Row } from "react-bootstrap";
import "./Layout_Info.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CardMain from "../../Components/Card/MainCard";

const Layout_Info = () => {
  return (
    <div id="info" className="info">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={8} className="text-center col-10">
            <h2>Informasi Acara</h2>
            <p className="alamat">
              Edelweiss Wedding Hall
              <br />
              Sport Club Goldland Karawaci, Gedung Edelweiss no. 1 dan 2, West
              Panunggangan, Cibodas, Jl. Palem Raja Raya, RT.002/RW.004,
              Bencongan Indah, Kec. Klp. Dua, Kota Tangerang, Banten 15810
            </p>
            <a
              href="https://goo.gl/maps/d9D6jASYaLnsXQj36"
              target="_blank"
              rel="noreferrer"
            >
              Klik untuk membuka peta
            </a>
            <p className="descriptions">
              Diharapkan kedatangan Bapak/Ibu, Saudara/i
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={5} className="col-10 mb-4">
            <CardMain
              title={"Akad"}
              icon={<i className="bi bi-alarm d-block" />}
              time={"08.00 - 10.00"}
              icon2={<i className="bi bi-calendar3 d-block"></i>}
              time2={"Minggu, 7 September 2023"}
              description={
                "Saat acara akad diharapkan untuk kondusif menjaga kekhidmatan dan kekusyuan seluruh prosesi"
              }
            />
          </Col>
          <Col md={5} className="col-10">
            <CardMain
              title={"Resrepsi"}
              icon={<i className="bi bi-alarm d-block" />}
              time={"10.00 - selesai"}
              icon2={<i className="bi bi-calendar3 d-block"></i>}
              time2={"Minggu, 7 September 2023"}
              description={
                "Saat acara akad diharapkan untuk kondusif menjaga kekhidmatan dan kekusyuan seluruh prosesi"
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout_Info;
