import { useMemo } from "react";

export const useMedicalData = () => {
  const stringifiedMedicalData = localStorage.getItem("medicalData");
  const medicalData = useMemo(
    () =>
      stringifiedMedicalData !== null ? JSON.parse(stringifiedMedicalData) : [],
    [stringifiedMedicalData]
  );

  const stringifiedMedicalDataWarning =
    localStorage.getItem("medicalDataWarning");
  const medicalDataWarning = useMemo(
    () =>
      stringifiedMedicalDataWarning !== null
        ? JSON.parse(stringifiedMedicalDataWarning)
        : [],
    [stringifiedMedicalDataWarning]
  );
  return [medicalData, medicalDataWarning];
};
