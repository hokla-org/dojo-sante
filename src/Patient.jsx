import { useParams } from "react-router-dom";

const Patient = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default Patient;
