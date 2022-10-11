import { Table } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import patients from './data/patients.json';

function App() {
  const dataSource = patients;
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
      width: '40%',
    },
    {
      title: 'Birthdate',
      dataIndex: 'birthdate',
      key: 'birthdate',
      width: '20%',
    },
    {
      title: 'General Practitioner',
      dataIndex: 'generalPractitioner',
      key: 'generalPractitioner',
      width: '20%',
    },
  ];

  return (
    <div className="table-container">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default App;
