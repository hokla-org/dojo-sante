import { useMemo } from "react";

export const usePatients = () => {
  const stringifiedPatients = localStorage.getItem("patients");
  const patients = useMemo(
    () => (stringifiedPatients !== null ? JSON.parse(stringifiedPatients) : []),
    [stringifiedPatients]
  );
  return patients;
};
