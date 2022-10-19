import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartesianGrid, Label, Line, LineChart, XAxis, YAxis } from "recharts";
import medicalData from "./data/medicalData.json";
import patients from "./data/patients.json";
import "./Patient.css";
import { ArrowLeftOutlined, DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space } from "antd";

const Patient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shownData, setShownData] = useState(null);

  const patient = patients.find((patient) => patient.id === id);

  const getDisplayedDate = (dataPoint) => {
    const date = new Date(dataPoint.datetime);

    return new Intl.DateTimeFormat().format(date);
  };

  const menuItems = Object.keys(medicalData).map((dataSourceKey) => ({
    key: dataSourceKey,
    label: (
      <div
        onClick={() => setShownData(dataSourceKey)}
      >{`${dataSourceKey} + (${medicalData[dataSourceKey].unit})`}</div>
    ),
  }));

  const menu = <Menu items={menuItems} />;

  return (
    <>
      <div className="header">
        <div onClick={() => navigate(-1)}>
          <ArrowLeftOutlined className="back-icon" />
        </div>
        <div className="info-container">
          <h1>{patient.name}</h1>
          <div className="email-birthdate-container">
            <h2>E-mail: {patient.email}</h2>
            <div className="spacer"></div>
            <h2>Birthdate: {patient.birthdate}</h2>
          </div>
          <div>
            <Dropdown
              overlay={menu}
              placement="bottomCenter"
              className="dropdown"
            >
              <Button>
                <Space>
                  {shownData ?? 'Sélectionner une donnée à afficher'}
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
      {shownData !== null && (
        <div className="chart-container">
          <LineChart
            width={1000}
            height={500}
            data={medicalData[shownData].data}
          >
            {medicalData[shownData].data[0].value !== undefined && (
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            )}
            {medicalData[shownData].data[0].value1 !== undefined && (
                <>
                  <Line type="monotone" dataKey="value1" stroke="#8884d8" />
                  <Line type="monotone" dataKey="value2" stroke="#8884d8" />
                </>
            )}
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey={getDisplayedDate}>
              <Label value="Date" position="bottom" offset={0} />
            </XAxis>
            <YAxis>
              <Label
                value={`Insulin (${medicalData[shownData].unit})`}
                position="left"
              />
            </YAxis>
          </LineChart>
        </div>
      )}
    </>
  );
};

export default Patient;
