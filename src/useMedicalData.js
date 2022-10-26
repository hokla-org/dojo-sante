import { useMemo } from "react";

export const useMedicalData = () => {
  const stringifiedMedicalData = localStorage.getItem("medicalData");
  const medicalData = useMemo(
    () =>
      stringifiedMedicalData !== null ? JSON.parse(stringifiedMedicalData) : [],
    [stringifiedMedicalData]
  );
  return medicalData;
};
