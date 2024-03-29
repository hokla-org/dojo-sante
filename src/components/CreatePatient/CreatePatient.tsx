import { Button, DatePicker, Form, Input } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useCreatePatient } from "./useCreatePatient";
import React from "react";
import { CreatePatientFormData } from "./CreatePatient.type";

const CreatePatient = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const { buildNewPatient, saveNewPatient } = useCreatePatient();

  const onFormSubmit = (formData: CreatePatientFormData) => {
    const newPatient = buildNewPatient(formData);
    saveNewPatient(newPatient);

    navigate("/");
  };

  return (
    <>
      <div className="header">
        <div onClick={goBack}>
          <ArrowLeftOutlined className="back-icon" />
        </div>
      </div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 4 }}
        onFinish={onFormSubmit}
      >
        <Form.Item label="Nom" name="name" rules={[{ required: true }]}>
          <Input placeholder="ex: Erlich Bachman" />
        </Form.Item>
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            { required: true, type: "email", validateTrigger: "onSubmit" },
          ]}
        >
          <Input placeholder="ex: eric.bachman@pipo.com" />
        </Form.Item>
        <Form.Item
          label="Date de naissance"
          name="birthdate"
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4 }}>
          <Button type="primary" htmlType="submit">
            Ajouter
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreatePatient;
