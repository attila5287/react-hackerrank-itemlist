import "bootswatch/dist/slate/bootstrap.min.css";
import Header from "./components/Header.tsx";
import DetailedRequirements from "./components/DetailedRequirements.tsx";
import InfoDev from "./components/InfoDev.tsx";
import { useState, ChangeEvent } from "react";

interface ItemInputProps {
  input: string;
  onInputChange: (value: string) => void;
  onAddItem: () => void;
}

const ItemInput = ({ input, onInputChange, onAddItem }: ItemInputProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("input changed: ", e.target.value);
    onInputChange(e.target.value);
  };

  const handleAddItem = () => {
    if (input.trim() !== "") {
      console.log("submitted input: ", input);
      onAddItem();
    } else {
      console.log(">> Input is empty");
      alert("Input is empty, no item added");
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control bg-dark text-white border-success"
        placeholder="Add an item"
        value={input}
        onChange={handleInputChange}
      />
      <button
        className="btn btn-outline-success btn-lg border-success"
        type="button"
        onClick={handleAddItem}
      >
        <i className="fas fa-plus mx-2"></i>
        Add Item
      </button>
    </div>
  );
};

function App() {
  // Initial state: empty list and empty input field
  const [list, setList] = useState<string[]>(["test"]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    const trimmedInput = input.trim();
    setList([...list, trimmedInput]);
    setInput("");
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <ItemInput
              input={input}
              onInputChange={setInput}
              onAddItem={handleAddItem}
            />
            <ul className="mt-2 mb-0">
              {list.map((item, index) => (
                <li style={{ listStyleType: "none" }} key={index}>
                  <span className="fas fa-square mx-2"></span>
                  <b>{item}</b>
                  <i className="fas fa-trash-alt mx-2 text-danger"></i>
                </li>
              ))}
            </ul>
            <hr />
          </div>
        </div>
      </div>
      <InfoDev />
      <DetailedRequirements />
    </>
  );
}

export default App;
