import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartesianGrid, Label, Line, LineChart, XAxis, YAxis } from "recharts";
import "./Patient.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Radio } from "antd";
import { usePatients } from "./usePatients";
import { usePatientMedicalData } from "./usePatientMedicalData";

const Patient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shownData, setShownData] = useState<string | null>(null);

  const patients = usePatients();

  const patient = patients.find((patient) => patient.id === id) ?? null;
  const medicalData = usePatientMedicalData(id);

  const getDisplayedDate = (dataPoint) => {
    const date = new Date(dataPoint.datetime);

    return new Intl.DateTimeFormat().format(date);
  };

  const options =
    medicalData === null
      ? []
      : Object.keys(medicalData).map((dataSourceKey) => ({
          value: dataSourceKey,
          label: `${medicalData[dataSourceKey].name} (${medicalData[dataSourceKey].unit})`,
        }));

  const onOptionSelect = (newSelectedValue) => setShownData(newSelectedValue);

  return (
    <>
      {patient !== null ? (
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
              {options.length === 0 ? (
                <h3>Aucune donnée</h3>
              ) : (
                <div>
                  <Radio.Group
                    className="select"
                    options={options}
                    onChange={(newSelection) =>
                      onOptionSelect(newSelection.target.value)
                    }
                    value={shownData}
                    optionType="button"
                  />
                </div>
              )}
            </div>
          </div>
          {shownData !== null && medicalData !== null && (
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
      ) : (
        <h3>Patient introuvable</h3>
      )}
    </>
  );
};

export default Patient;
