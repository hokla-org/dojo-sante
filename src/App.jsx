import { Input, Table } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import "./App.css";
import patients from "./data/patients.json";

function App() {
  const [dataSource, setDataSource] = useState(patients);

  const filterPatients = (searchTerm) => {
    const filteredPatients = patients.filter((patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDataSource(filteredPatients);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
      width: "40%",
    },
    {
      title: "Birthdate",
      dataIndex: "birthdate",
      key: "birthdate",
      width: "20%",
    },
    {
      title: "General Practitioner",
      dataIndex: "generalPractitioner",
      key: "generalPractitioner",
      width: "20%",
    },
  ];

  return (
    <div className="table-container">
      <div className="search-bar-container">
        <Input.Search onSearch={(searchTerm) => filterPatients(searchTerm)} />
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default App;
