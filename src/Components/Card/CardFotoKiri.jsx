import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

const Card_Foto_Kiri = (prop) => {
  const { name, description, fatherName, motherName, image } = prop;
  return (
    <Col lg={6}>
      <Row>
        <div className="col-4">
          <img src={image} className="img-responsive rounded-circle w-100" />
        </div>
        <div className="col-8">
          <h3>{name}</h3>
          <p>{description}</p>
          <p>
            Putra dari Bpk. {fatherName}
            <br /> dan <br /> Ibu {motherName}
          </p>
        </div>
      </Row>
    </Col>
  );
};

Card_Foto_Kiri.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  fatherName: PropTypes.string,
  motherName: PropTypes.string,
  image: PropTypes.node,
  imageKiri: PropTypes.node,
};

export default Card_Foto_Kiri;
