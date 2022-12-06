import { useMemo } from "react";
import { PatientsMedicalData } from "../types/MedicalData.type";

export const usePatientsMedicalData = (): PatientsMedicalData => {
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
