import React from "react";
import { Table } from "antd";
import { Button } from "antd";

const App = ({ data, onDeleteRow, onEditRow }) => {
  const handleEdit = (record) => {
    // console.log('Edit clicked:', record);

    onEditRow(record);
  };

  const handleDelete = (id) => {
    onDeleteRow(id);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "fname",
      key: "fname",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Edit",
      key: "",
      render: (text, record, inex) => (
        <Button type="primary" onClick={() => handleEdit(record)}>
          Edit
        </Button>
      ),
    },
    {
      title: "Delete",
      key: "",
      render: (text, record) => (
        <Button type="primary" onClick={() => handleDelete(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};
export default App;
