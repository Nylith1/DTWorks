import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GroupList from "./components/GroupList";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, ListGroup, ToastContainer } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Toast from "react-bootstrap/Toast";

function App() {
  const [name, setAssetName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [assets, setAssets] = useState([]);

  const fetchAssets = () => {
    axios.get("https://localhost:7071/Asset/get-assets").then((response) => {
      setAssets(response.data);
      console.log(response.data);
    });
  };

  const addAsset = async () => {
    await axios.post("https://localhost:7071/Asset/add", {
      name: name,
      quantity: quantity,
    });
  };
  const [showToast, setShowToast] = useState(true);
  const [toastMessage, setToastMessage] = useState("");
  const [toastMessageHeader, setToastMessageHeader] = useState("");
  const [toastType, setToastType] = useState("");

  const validateEnteredData = async () => {
    if (parseFloat(quantity) <= 0 || isNaN(parseFloat(quantity))) {
      setToastMessage(
        "Wrong quantity entered. Quantity has to be more than zero."
      );
      setToastMessageHeader("Error");
      setToastType("danger");
      setShowToast(true);
    } else {
      await addAsset();
      fetchAssets();
      setToastMessage("Your information was saved");
      setToastType("success");
      setToastMessageHeader("Saved");
    }
  };

  return (
    <div>
      <div className="position-absolute top-0 start-0 m-2">
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            className="me-auto"
            type="number"
            min="0"
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Add your item here..."
          />
          <Form.Control
            onChange={(e) => setAssetName(e.target.value)}
            className="me-auto"
            placeholder="Add your item here..."
          />
          <Button
            onClick={validateEnteredData}
            variant="primary"
            className="mb-2"
          >
            Add asset
          </Button>
        </Stack>
      </div>
      <GroupList items={assets}></GroupList>
      <ToastContainer position="bottom-end" className="m-2">
        <Toast
          bg={toastType}
          show={showToast}
          onClose={(_) => setShowToast(false)}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{toastMessageHeader}</strong>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
export default App;
