import { Input, Space, Table, Tag } from "antd";
import "antd/dist/reset.css";
import { ChangeEvent, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { usePatientsWithMedicalWarnings } from "../../hooks/usePatientsWithMedicalWarnings";
import React from "react";
import { PatientWithWarnings } from "../../types/Patient";

function Home() {
  const patients = usePatientsWithMedicalWarnings();
  const [dataSource, setDataSource] = useState<PatientWithWarnings[]>(patients);
  const navigate = useNavigate();

  const filterPatients = (event: ChangeEvent<HTMLInputElement>) => {
    const filteredPatients = patients.filter((patient) =>
      patient.name
        .toLowerCase()
        .includes(event.currentTarget.value.toLowerCase())
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
        <Input
          data-testid="search-bar"
          className="search-bar"
          onChange={(searchTerm) => filterPatients(searchTerm)}
          placeholder="Recherchez un patient"
        />
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
