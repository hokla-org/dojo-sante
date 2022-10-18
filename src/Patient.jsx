import { useNavigate, useParams } from "react-router-dom";
import { CartesianGrid, Label, Line, LineChart, XAxis, YAxis } from "recharts";
import medicalData from "./data/medicalData.json";
import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Patient = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const getDisplayedDate = (dataPoint) => {
    const date = new Date(dataPoint.datetime);

    return new Intl.DateTimeFormat().format(date);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          margin: 40,
          width: "50%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div onClick={() => navigate(-1)}>
          <ArrowLeftOutlined style={{ fontSize: 20 }} />
        </div>
        <div>Dropdown</div>
      </div>
      <div style={{ margin: "auto", width: "100%" }}>
        <LineChart
          width={1000}
          height={500}
          data={medicalData.insulin.data}
          style={{ margin: "auto", width: "100%" }}
        >
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey={getDisplayedDate}>
            <Label value="Date" position="bottom" offset={0} />
          </XAxis>
          <YAxis>
            <Label
              value={`Insulin (${medicalData.insulin.unit})`}
              position="left"
            />
          </YAxis>
        </LineChart>
      </div>
    </>
  );
};

export default Patient;
