import { useMemo } from "react";

export const usePatientsMedicalData = () => {
  const stringifiedPatientsMedicalData = localStorage.getItem(
    "patientsMedicalData"
  );
  const patientsMedicalData = useMemo(
    () =>
      stringifiedPatientsMedicalData !== null
        ? JSON.parse(stringifiedPatientsMedicalData)
        : [],
    [stringifiedPatientsMedicalData]
  );

  return patientsMedicalData;
};
