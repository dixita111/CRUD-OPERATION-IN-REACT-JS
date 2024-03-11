import React, { useState } from "react";
import App from "./App.js";
import "./App.css";
import { Button } from "antd";
function Task() {
  const [fData, setFdata] = useState({ fname: "", age: "" });
  const [mainData, setMainData] = useState(
    JSON.parse(localStorage.getItem("localData")) || [],
  );

  const [isEdit, setIsEdit] = useState(-1);
  // const [isDelete, setIsDelete] = useState([]);
  const handleChange = (e) => {
    setFdata({ ...fData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (isEdit === -1) {
      setMainData([...mainData, { ...fData, id: Date.now() }]);
      localStorage.setItem("localData", JSON.stringify([...mainData, fData]));
    } else {
      const updated = mainData?.map((item) => {
        if (isEdit === item.id) {
          return fData;
        }
        return item;
      });
      setMainData(updated);
      localStorage.setItem("localData", JSON.stringify(updated));
    }
  };
  console.log(mainData);

  const handleEdit = (idx) => {
    console.log(idx);
    setFdata(idx);
    setIsEdit(idx.id);
  };
  const handleDelete = (id) => {
    console.log(id);

    const updatedTableData = mainData.filter((row) => row.id !== id);
    setMainData(updatedTableData);
    localStorage.setItem("localData", JSON.stringify(updatedTableData));
  };

  return (
    <>
      <div className=" flex flex-col justify-center items-center m-4 gap-6">
        <h1>CRUD OPERATION IN REACT JS</h1>
        <div>
          <label htmlFor="fname">Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={fData.fname}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={fData.age}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <Button type="primary" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </div>
      <div className=" flex flex-col justify-center items-center m-4 ">
        <App
          data={mainData}
          onDeleteRow={handleDelete}
          onEditRow={(item) => handleEdit(item)}
        />
      </div>
    </>
  );
}

export default Task;
