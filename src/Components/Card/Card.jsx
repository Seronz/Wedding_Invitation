import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

const Card = (prop) => {
  const { name, description, fatherName, motherName, image } = prop;
  return (
    <Col lg={6}>
      <Row>
        <div className="col-8 text-end">
          <h3>{name}</h3>
          <p>{description}</p>
          <p>
            Putra dari Bpk. {fatherName}
            <br /> dan <br /> Ibu {motherName}
          </p>
        </div>
        <div className="col-4">
          <img src={image} className="img-responsive rounded-circle w-100" />
        </div>
      </Row>
    </Col>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  fatherName: PropTypes.string,
  motherName: PropTypes.string,
  image: PropTypes.node,
  imageKiri: PropTypes.node,
};

export default Card;
