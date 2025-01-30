import { FaEye } from "react-icons/fa6";
import { useState } from "react";

export default function Password() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="container">
      <h2 style={{ marginTop: "100px", marginLeft:"450px"}}>Password Hide and Show</h2>
      <div className="d-flex">
        <input
          style={{ paddingLeft: "20px", width: "400px" ,marginLeft:"425px"}}
          type={show ? "text" : "password"}
          placeholder="Your Password"
        />
        <p
          onClick={handleClick}
          style={{ cursor: "pointer", marginLeft: "-25px", paddingTop: "5px" }}
        >
          <FaEye />
        </p>
      </div>
    </div>
  );
}
