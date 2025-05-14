import "../../styles/me.css";
import pi from "../../assets/images/piCoins/icons/piCoins.png";
import SingleHeader from "../extra/SingleHeader";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaAngleDoubleDown } from "react-icons/fa";
const Swap = () => {
  return (
    <div>
      <SingleHeader />
      <div className="swap-container mt-5 text-white">
        <h2 className="d-flex align-items-center justify-content-start gap-3 p-3 input-container">
          <img src={pi} alt="pi coin" className="pi-coin" />{" "}
          <span className="pi-text">1036.45</span>
        </h2>
        <h4 className="fs-5 my-2">PI ≈ 0.0002 USDT</h4>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fs-5 fw-bold">You Pay</Form.Label>
          <InputGroup className="w-full">
            <Form.Control
              placeholder="Minimum convertion Amount 2000"
              type="number"
              step="0.01"
              name="quota"
              autoComplete="off" // fixed typo: `autocomplete` to `autoComplete` and "number" is not valid here
            />
            {/* <Button variant=" all-btn">All</Button> */}
            <button className="all-btn" type="button">
              All
            </button>
          </InputGroup>
        </Form.Group>
        <div className="d-flex align-items-center justify-content-center gap-3">
          <div className="bg-filled">
            <FaAngleDoubleDown />
          </div>
          <h2>Flash exchange</h2>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fs-5 fw-bold">You Got</Form.Label>
          <InputGroup className="w-full">
            <Form.Control
              type="number"
              className="input-text"
              step="0.01"
              name="quota"
              defaultValue={0.0}
            />
          </InputGroup>
        </Form.Group>
      </div>
      <div className=" swap-container-btn ">
        <Button variant="primary" className="w-100">
          CONFIRM
        </Button>
      </div>
    </div>
  );
};

export default Swap;
