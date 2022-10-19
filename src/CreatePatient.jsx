import { Button, DatePicker, Form, Input } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const CreatePatient = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div onClick={() => navigate(-1)}>
          <ArrowLeftOutlined className="back-icon" />
        </div>
      </div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 4 }}
        onFinish={() => alert()}
      >
        <Form.Item label="Nom" name="name" rules={[{ required: true }]}>
          <Input placeholder="ex: Erlich Bachman" />
        </Form.Item>
        <Form.Item label="E-mail" name="email" rules={[{ required: true }]}>
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
