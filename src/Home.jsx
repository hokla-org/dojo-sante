import { Button, Input, Space, Table, Tag } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import { usePatientsWithMedicalWarnings } from "./usePatientsWithMedicalWarnings";

function Home() {
  const patients = usePatientsWithMedicalWarnings();
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
    {
      title: "Alertes",
      key: "warnings",
      dataIndex: "warnings",
      render: (_, { warnings }) => (
        <>
          <Space direction="vertical">
            {warnings.map((warning) => {
              return (
                <>
                  <Tag color="volcano" key={warning}>
                    {warning}
                  </Tag>
                </>
              );
            })}
          </Space>
        </>
      ),
    },
  ];

  return (
    <div className="table-container">
      <div className="table-actions-container">
        <Input.Search
          className="search-bar"
          onSearch={(searchTerm) => filterPatients(searchTerm)}
        />
        <Button
          icon={<PlusCircleOutlined />}
          onClick={() => navigate("/create-patient")}
        >
          Créer un patient
        </Button>
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        onRow={(record) => ({
          onClick: () => navigate(`/patient/${record.id}`),
        })}
      />
    </div>
  );
}

export default Home;
