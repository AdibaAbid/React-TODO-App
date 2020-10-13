import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [list, setList] = useState(["aalo", "piyaz"]);
  const [text, setText] = useState("");
  const [edit, editText] = useState('')
  const [show, showBtn] = useState(false)
  const [showAdd, showAddBtn] = useState(true)

  const changeText = function (e) {
    const input = e.target.value;
    setText(input);
  };
  const addItem = function () {
    const newList = [...list];
    newList.push(text);
    setList(newList);
    setText("");
  };

  const deleteItem = function (index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const editItem = function (index) {
    const newList = [...list]
    setText(newList[index])
    showBtn(true)
    showAddBtn(false)
    editText(index)
  }

  const update = function () {
    const newList = [...list]
    newList.splice(edit, 1, text)
    setList(newList)
    setText('')
    showBtn(false)
    showAddBtn(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ width: '16%', marginTop: '-12%' }} />
        <h1 className="display-3 mt-n4">Todo List</h1>

        <div className="container container-sm">
          <div className="input-group mb-3 ">
            <input type="text" className="form-control" placeholder="Type any item here.."
              onChange={changeText}
              value={text} aria-label="item text" aria-describedby="button-addon2" />
            <div className="input-group-append">
              {
                showAdd &&
                <button className="btn btn-outline-success" onClick={addItem} type="button" id="button-addon2">Add Item </button>
              }

              {
                show &&
                <button className="btn btn-outline-success" onClick={update} type="button" id="button-addon2">Update</button>
              }

            </div>
          </div>

          <ul className="list-group text-dark">
            {
              list.map(function (item, index) {
                return (
                  <li key={item +"i"} className="list-group-item d-flex justify-content-between text-capitalize">
                    {item}
                    <div>
                      <button className="btn btn-danger mr-2" onClick={() => deleteItem(index)}>Delete</button>
                      <button className="btn btn-info" onClick={() => editItem(index)}>Edit</button>
                    </div>
                  </li>

                );
              })
            }
          </ul>

        </div>

      </header>
    </div>
  );
}

export default App;
