import { usePatientsMedicalData } from "./usePatientsMedicalData";

export const usePatientMedicalData = (patientId) => {
  const patientsMedicalData = usePatientsMedicalData();

  return patientId in patientsMedicalData
    ? patientsMedicalData[patientId]
    : null;
};
