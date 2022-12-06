import { useMemo } from "react";
import { Patient } from "./components/Patient/Patient.type";

export const usePatients = (): Patient[] => {
  const stringifiedPatients = localStorage.getItem("patients");
  const patients = useMemo(
    () => (stringifiedPatients !== null ? JSON.parse(stringifiedPatients) : []),
    [stringifiedPatients]
  );
  return patients;
};
