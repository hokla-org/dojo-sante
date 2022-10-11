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
      sorter: (p1, p2) => p1.name.localeCompare(p2.name),
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
      width: '40%',
      sorter: (p1, p2) => p1.email.localeCompare(p2.email),
    },
    {
      title: 'Birthdate',
      dataIndex: 'birthdate',
      key: 'birthdate',
      width: '20%',
      sorter: (p1, p2) => p1.birthdate.localeCompare(p2.birthdate),
    },
    {
      title: 'General Practitioner',
      dataIndex: 'generalPractitioner',
      key: 'generalPractitioner',
      width: '20%',
      sorter: (p1, p2) => p1.generalPractitioner.localeCompare(p2.generalPractitioner),
    },
  ];

  return (
    <div className="table-container">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default App;
