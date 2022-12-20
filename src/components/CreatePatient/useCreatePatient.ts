import { usePatients } from "../../hooks/usePatients";

export const useCreatePatient = () => {
  const patients = usePatients();

  const createPatient = (newPatient) => {
    const newPatients = [...patients, newPatient];
    localStorage.setItem("patients", JSON.stringify(newPatients));
  };

  return createPatient;
};
