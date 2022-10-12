import { Input, Table } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import "./Home.css";
import patients from "./data/patients.json";
import { useNavigate } from 'react-router-dom';

function Home() {
  const [dataSource, setDataSource] = useState(patients);
  const navigate = useNavigate();

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
      sorter: (p1, p2) => p1.name.localeCompare(p2.name),
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
      width: "40%",
      sorter: (p1, p2) => p1.email.localeCompare(p2.email),
    },
    {
      title: "Birthdate",
      dataIndex: "birthdate",
      key: "birthdate",
      width: "20%",
      sorter: (p1, p2) => p1.birthdate.localeCompare(p2.birthdate),
    },
    {
      title: "General Practitioner",
      dataIndex: "generalPractitioner",
      key: "generalPractitioner",
      width: "20%",
      sorter: (p1, p2) =>
        p1.generalPractitioner.localeCompare(p2.generalPractitioner),
    },
  ];

  return (
    <div className="table-container">
      <div className="search-bar-container">
        <Input.Search onSearch={(searchTerm) => filterPatients(searchTerm)} />
      </div>
      <Table dataSource={dataSource} columns={columns} onRow={(record) => ({
        onClick: () => navigate(`/patient/${record.id}`)
      })} />
    </div>
  );
}

export default Home;
