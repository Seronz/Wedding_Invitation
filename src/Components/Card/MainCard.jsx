import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import "./CardMail.css";

function CardMain(prop) {
  const { icon, icon2, time, time2, description, title } = prop;
  return (
    <Card className="text-center">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Row className="justify-content-center">
          <Col md={6}>
            {icon}
            <span>{time}</span>
          </Col>
          <Col md={6}>
            {icon2}
            <span>{time2}</span>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>{description}</Card.Footer>
    </Card>
  );
}

CardMain.propTypes = {
  icon: PropTypes.node,
  icon2: PropTypes.node,
  time: PropTypes.node,
  time2: PropTypes.node,
  description: PropTypes.node,
  title: PropTypes.node,
};

export default CardMain;
