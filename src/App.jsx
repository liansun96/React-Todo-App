import { useState } from "react";
import "./App.css";
import "./custom.css";
import { v4 as uuidv4 } from "uuid";
import ListContainer from "./Components/ListContainer";
// import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  //  console.log(uuidv4());

  const handleChange = (e) => {
    //  console.log(e.currentTarge.value);
    setText(e.currentTarget.value);
  };

  const handleClick = () => {
    if (text !== "") {
      const data = {
        id: uuidv4(),
        text,
      };
      setList((pre) => [...pre, data]);
      setText("");
    } else {
      alert("Input is empty");
    }
  };

  const handleDelet = (e) => {
    setList((perState) => perState.filter((i) => i.id !== e));
  };

  const handleEdit = (id, text) => {
    const value = prompt("are you sure you want to edit", text);
    if (value !== "") {
      setList((pre) =>
        pre.map((i) => (i.id === id ? { id: uuidv4(), text: value } : i))
      );
    }
  };

  // console.log(text);

  return (
    <div className="container">
      <div className="row flex-column justify-content-center align-items-center">
        <h1 className="header fw-bolder my-5">CRUD Todo</h1>
        <div className="inputContainer w-50 ">
          <input
            value={text}
            onChange={handleChange}
            className="input form-control"
            type="text"
          />          
          <button className="btn btn-lg btn-primary ms-3" onClick={handleClick}>
            Add
          </button>
        </div>
        <div className="outputContainer w-50">
          {list.map((i) => (
            <ListContainer
              key={i.id}
              data={i}
              drop={handleDelet}
              edit={handleEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
};



export default App;
