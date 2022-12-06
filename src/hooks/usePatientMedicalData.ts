import { PatientMedicalData } from "../types/MedicalData.type";
import { usePatientsMedicalData } from "./usePatientsMedicalData";

export const usePatientMedicalData = (patientId): PatientMedicalData | null => {
  const patientsMedicalData = usePatientsMedicalData();

  return patientId in patientsMedicalData
    ? patientsMedicalData[patientId]
    : null;
};
