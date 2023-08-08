import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Buttons.css";

const Buttons = (prop) => {
  const { title, onclick } = prop;
  return (
    <>
      <Button variant="light" className="mt-4 button" onClick={onclick}>
        {title}
      </Button>
    </>
  );
};

Buttons.propTypes = {
  title: PropTypes.string,
  onclick: PropTypes.node,
};

export default Buttons;
